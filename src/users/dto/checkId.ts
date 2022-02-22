import { IsNumberString } from 'class-validator';

export class checkId {
    @IsNumberString()
    id: number
}