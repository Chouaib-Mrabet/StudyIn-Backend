import { IsEmail, IsNotEmpty } from 'class-validator';

export class StudentSubscribeDto {

    @IsNotEmpty()
    username?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;





}
