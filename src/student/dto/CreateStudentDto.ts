import { IsEmail, MaxLength, IsString } from "class-validator"

export declare class CreateStudentDto {
    @IsString()
    @MaxLength(50)
    firstName: string;

    @IsString()
    @MaxLength(50)
    lastName: string;

    @IsString()
    @MaxLength(50)
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    title: string;

    @MaxLength(10000)
    @IsString()
    description: string;

    @IsString()
    location: string;
}