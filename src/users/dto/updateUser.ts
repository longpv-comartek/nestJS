import { IsNumberString, IsString } from 'class-validator';

export class updateUser {
    @IsNumberString()
    readonly index: number
    @IsNumberString()
    readonly id: number
    @IsString()

    readonly name: string
}