import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { Repository } from 'typeorm';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import {StudentSubscribeDto} from "./dto/student-subscribe.dto";
import * as bcrypt from 'bcrypt';
import { LoginCredentialsDto } from "./dto/login-credentials.dto";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>,
        private jwtService: JwtService
    ) { }

    async findStudentById(id: number) {
        const student = await this.studentRepository.findOne(id);
        if (!student) {
            throw new NotFoundException(`L'etudiant d'id ${id} n'existe pas`);
        }

        return student;
    }

    async getStudents(): Promise<StudentEntity[]> {
        return await this.studentRepository.find();
    }



    async register(userData: StudentSubscribeDto): Promise<Partial<StudentEntity>> {
        const user = this.studentRepository.create({
            ...userData
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.studentRepository.save(user);
        } catch (e) {
            throw new ConflictException(`Le username et le email doivent être unique`);
        }
        return {

            id: user.id,
            username: user.username,
            email: user.email,
            firstName : user.firstName,
            lastName:user.lastName,
            location: user.location,
            description: user.description,
            title : user.title,
            rating : user.rating


        };

    }

    async login(credentials: LoginCredentialsDto)  {


        const {username, password} = credentials;
        const user = await this.studentRepository.createQueryBuilder("user")
          .where("user.username = :username or user.email = :username",
            {username}
          )
          .getOne();


        if (!user)
            throw new NotFoundException('username ou password erronée');

        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {

            const payload= {
                username: user.username,
                email: user.email,
            };
            const jwt = await this.jwtService.sign(payload);
            return{
                "access_token" : jwt
            };


        } else {
            throw new NotFoundException('username ou password erronée');
        }
    }


}
