import { IsNumberString, IsString, IsMobilePhone } from 'class-validator';


export class updateUser {

    @IsNumberString()
    index: number


    @IsNumberString()
    readonly id: number
    @IsString()

    readonly name: string
}