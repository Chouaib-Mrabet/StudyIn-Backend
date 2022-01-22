import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';

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
    async create(
        @Body() student: StudentEntity
    ): Promise<any> {
        return this.studentsService.createStudent(student);
    }

    @Put(':id/update')
    async update(
        @Param('id') id,
        @Body() student: StudentEntity
    ): Promise<any> {
        student.id = Number(id);
        return this.studentsService.updateStudent(student);
    }

    @Delete(':id/delete')
    async delete(
        @Param('id') id
    ): Promise<any> {
        return this.studentsService.deleteStudent(id);
    }


}
