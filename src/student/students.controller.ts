import { Controller, Get, Param, ParseIntPipe, DefaultValuePipe, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Observable, of } from 'rxjs';


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

    @Get('paginate')
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
    }

    @Get(":id")
    async getStudentById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<StudentEntity> {
        return await this.studentsService.findStudentById(id);
    }


}
