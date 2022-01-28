import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { LoginCredentialsDto } from "./dto/login-credentials.dto";
import { StudentSubscribeDto } from "./dto/student-subscribe.dto";

@Controller('student')
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
    
    @Get(":id")
    async getStudentById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<StudentEntity> {
        return await this.studentsService.findStudentById(id);
    }

    @Post('register')
    register(
      @Body() studentData: StudentSubscribeDto
    ) {
        return this.studentsService.register(studentData);
    }

    @Post('login')
    login(
      @Body() credentials: LoginCredentialsDto
    ) {
        return this.studentsService.login(credentials);
    }


}
