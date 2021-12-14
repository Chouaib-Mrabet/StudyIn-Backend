import { StudentsService } from './students.service';
import { StudentEntity } from './entitiers/student.entity';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    getAllStudents(): Promise<StudentEntity[]>;
}
