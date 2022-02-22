import { IsNumberString, IsString } from 'class-validator';


export class replaceUser {
    @IsNumberString()
    readonly id: number;

    @IsString()
    readonly name: string;
}