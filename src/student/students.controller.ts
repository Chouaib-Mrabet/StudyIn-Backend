import { Controller, Get, Param, ParseIntPipe, DefaultValuePipe, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { Pagination } from 'nestjs-typeorm-paginate';

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

    @Get('paginate')
    async index(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    ): Promise<Pagination<StudentEntity>> {
        limit = limit > 100 ? 100 : limit;
        return this.studentsService.paginate({
            page,
            limit,
            route: 'http://localhost:3000/student',
        });
    }


    @Get(":id")
    async getStudentById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<StudentEntity> {
        return await this.studentsService.findStudentById(id);
    }


}
