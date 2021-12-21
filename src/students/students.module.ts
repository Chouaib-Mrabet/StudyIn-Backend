import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entitiers/student.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
    imports: [TypeOrmModule.forFeature([StudentEntity])],
    controllers: [StudentsController],
    providers: [StudentsService]
})
export class StudentsModule {}
