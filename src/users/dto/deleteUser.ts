import { IsNumber } from 'class-validator';

export class deleteUser {
    @IsNumber()
    readonly id: string;
}