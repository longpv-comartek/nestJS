import { IsNumber, IsString } from 'class-validator';

export class PostRouteDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}