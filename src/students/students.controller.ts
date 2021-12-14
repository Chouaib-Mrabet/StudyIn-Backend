import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentEntity } from './entitiers/student.entity';

@Controller()
export class StudentsController {
    constructor(
        private studentsService: StudentsService
    ) {
    }

    @Get()
    async getAllStudents(
    ): Promise<StudentEntity[]> {
        return await this.studentsService.getStudents();
    }
}
