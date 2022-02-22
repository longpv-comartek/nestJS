import { IsNumberString, IsString } from 'class-validator';

export class CreateUser {
    @IsNumberString()
    readonly id: number;

    
    @IsString()
    readonly name: string;
}