import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>
    ) { }

    async createStudent(student: StudentEntity): Promise<StudentEntity> {
        return await this.studentRepository.save(student);
    }


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

    async updateStudent(student: StudentEntity): Promise<UpdateResult> {

        return await this.studentRepository.update(student.id,student);
    }

    async deleteStudent(id): Promise<DeleteResult> {
        return await this.studentRepository.delete(id);
    }


}
