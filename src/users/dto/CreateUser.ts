import { IsNumberString, IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUser {

    @IsNumberString({}, { message: 'not number' })
    id: number;

    @MinLength(6, { message: 'tối thiểu 6 kí tự' })
    @MaxLength(12, { message: 'tối đa 12 kí tự' })
    @IsEmail({}, { message: 'not Email' })
    name: string;
}