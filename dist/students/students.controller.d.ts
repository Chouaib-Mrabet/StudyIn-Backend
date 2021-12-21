import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    getAllStudents(): Promise<StudentEntity[]>;
    getStudentById(id: number): Promise<StudentEntity>;
}
