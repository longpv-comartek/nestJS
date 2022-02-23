import { IsNumber } from 'class-validator';


export class deleteUser {
    @IsNumber({}, { message: 'id not number' })
    readonly id: string;
}