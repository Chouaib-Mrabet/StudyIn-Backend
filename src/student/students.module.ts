import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './strategy/passport-jwt.strategy';



dotenv.config();
@Module({
    imports: [TypeOrmModule.forFeature([StudentEntity]),
    PassportModule.register({
            defaultStrategy: 'jwt'
        }),
    JwtModule.register({
            secret: process.env.SECRET,
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    controllers: [StudentsController],
    providers: [StudentsService,JwtStrategy],
    exports: [StudentsService]

})
export class StudentsModule {}
