import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { Repository, Like } from 'typeorm';
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CreateStudentDto } from './dto/CreateStudentDto';
import { UpdateStudentDto } from './dto/UpdateStudentDto';

@Injectable()
export class StudentsService {

    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>
    ) { }

    async getStudents(): Promise<StudentEntity[]> {
        return await this.studentRepository.find();
    }

    async findStudentById(id: number): Promise<StudentEntity> {
        const student = await this.studentRepository.findOne(id);

        if (!student) {
            throw new NotFoundException(`L'etudiant d'id ${id} n'existe pas`);
        }

        return student;
    }

    async createStudent(student: CreateStudentDto): Promise<StudentEntity> {
        const user = this.studentRepository.create({
            ...student
        });

        try {
            return await this.studentRepository.save(user);
        }
        catch (e) {
            throw new ConflictException(`Le username et l'email doivent etre unique`);
        }
    }

    async updateStudent(id: number, student: UpdateStudentDto): Promise<StudentEntity> {
        const newStudent = await this.studentRepository.preload({
            id,
            ...student
        });

        if (!newStudent) {
            throw new NotFoundException(`Le student d'id ${id} n'existe pas`);
        }

        return await this.studentRepository.save(newStudent);
    }

    async deleteStudent(id: number) {
        return await this.studentRepository.delete(id);
    }

    paginate(options: IPaginationOptions): Observable<Pagination<StudentEntity>> {
        return from(paginate<StudentEntity>(this.studentRepository, options)).pipe(
            map((usersPageable: Pagination<StudentEntity>) => {
                usersPageable.items.forEach(function (v) { delete v.password });
                return usersPageable;
            })
        )
    }

    paginateFilterByUsername(options: IPaginationOptions, student: any): Observable<Pagination<StudentEntity>> {
        return from(this.studentRepository.findAndCount({
            skip: Number(options.page) * Number(options.limit) || 0,
            take: Number(options.limit) || 10,
            order: { id: "DESC" },
            select: ['id', 'firstName', 'lastName', 'username', 'email', 'title', 'description', 'location', 'rating'],
            where: [
                { username: Like(`%${student.username}%`) }
            ]
        })).pipe(
            map(([students, totalStudents]) => {
                const studentsPageable: Pagination<StudentEntity> = {
                    items: students,
                    links: {
                        first: options.route + `?limit=${options.limit}`,
                        previous: options.route + ``,
                        next: options.route + `?limit=${options.limit}&page=${Number(options.page) + 1}`,
                        last: options.route + `?limit=${options.limit}&page=${Math.ceil(totalStudents / Number(options.limit))}`
                    },
                    meta: {
                        currentPage: Number(options.page),
                        itemCount: students.length,
                        itemsPerPage: Number(options.limit),
                        totalItems: totalStudents,
                        totalPages: Math.ceil(totalStudents / Number(options.limit))
                    }
                };
                return studentsPageable;
            })
        )
    }

    paginateFilterByTitle(options: IPaginationOptions, student: StudentEntity): Observable<Pagination<StudentEntity>> {
        return from(this.studentRepository.findAndCount({
            skip: Number(options.page) * Number(options.limit) || 0,
            take: Number(options.limit) || 10,
            order: { rating: "DESC" },
            select: ['id', 'firstName', 'lastName', 'username', 'email', 'title', 'description', 'location', 'rating'],
            where: [
                { title: Like(`%${student.title}%`) }
            ]
        })).pipe(
            map(([students, totalStudents]) => {
                const studentsPageable: Pagination<StudentEntity> = {
                    items: students,
                    links: {
                        first: options.route + `?limit=${options.limit}`,
                        previous: options.route + ``,
                        next: options.route + `?limit=${options.limit}&page=${Number(options.page) + 1}`,
                        last: options.route + `?limit=${options.limit}&page=${Math.ceil(totalStudents / Number(options.limit))}`
                    },
                    meta: {
                        currentPage: Number(options.page),
                        itemCount: students.length,
                        itemsPerPage: Number(options.limit),
                        totalItems: totalStudents,
                        totalPages: Math.ceil(totalStudents / Number(options.limit))
                    }
                };
                return studentsPageable;
            })
        )
    }
}
