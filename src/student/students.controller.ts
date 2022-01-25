import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { CreateStudentDto } from './Dto/createStudentDto';
import { UpdateStudentDto } from './Dto/updateStudentDto';

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

    @Post('create')
    async createStudent
        (@Body() student: CreateStudentDto): Promise<any> {
      return this.studentsService.createStudent(student);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() student: UpdateStudentDto): Promise<any> {
        id = Number(id);
        return this.studentsService.updateStudent(id,student);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.studentsService.deleteStudent(id);
    }


}
