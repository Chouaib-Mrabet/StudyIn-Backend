import { StudentEntity } from './entities/student.entity';
import { Repository } from 'typeorm';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<StudentEntity>);
    findStudentById(id: number): Promise<StudentEntity>;
    getStudents(): Promise<StudentEntity[]>;
}
