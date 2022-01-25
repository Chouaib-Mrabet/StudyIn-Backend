import { Controller, Get, Param, ParseIntPipe, DefaultValuePipe, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable, of } from 'rxjs';
import { CreateStudentDto } from './dto/CreateStudentDto';
import { UpdateStudentDto } from './dto/UpdateStudentDto';


@Controller('students')
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


    @Post()
    async createStudent(
        @Body() student: CreateStudentDto
    ): Promise<any> {
        return this.studentsService.createStudent(student);
    }

    @Put(':id')
    async updateStudent(
        @Param('id', ParseIntPipe) id,
        @Body() student: UpdateStudentDto
    ): Promise<any> {
        return this.studentsService.updateStudent(id, student);
    }

    @Delete(':id')
    async deleteStudent(
        @Param('id') id
    ): Promise<any> {
        return this.studentsService.deleteStudent(id);
    }

    @Get('paginate')
    index(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
    ): Observable<Pagination<StudentEntity>> {
        limit = limit > 100 ? 100 : limit;

        return this.studentsService.paginate({ page: Number(page), limit: Number(limit), route: 'http://localhost:3000/students' });
    }


    /*     @Get('paginate')
        index(
            @Query('page') page: number = 1,
            @Query('limit') limit: number = 10,
            @Query('username') username: string
        ): Observable<Pagination<StudentEntity>> {
            limit = limit > 100 ? 100 : limit;
    
            if (username === null || username === undefined) {
                return this.studentsService.paginate({ page: Number(page), limit: Number(limit), route: 'http://localhost:3000/students' });
            } else {
    
                return this.studentsService.paginateFilterByUsername(
                    { page: Number(page), limit: Number(limit), route: 'http://localhost:3000/students' },
                    { username }
                )
            }
        } */



}
