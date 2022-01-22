import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { Repository } from 'typeorm';
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>
    ) { }

    async findStudentById(id: number) {
        const student = await this.studentRepository.findOne(id);
        if (!student) {
            throw new NotFoundException(`L'etudiant d'id ${id} n'existe pas`);
        }

        return student;
    }

    async getStudents(): Promise<StudentEntity[]> {
        return await this.studentRepository.find();
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<StudentEntity>> {
        return paginate<StudentEntity>(this.studentRepository, options);
    }
}
