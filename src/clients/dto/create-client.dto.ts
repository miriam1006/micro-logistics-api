import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateClientDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    address: string;
}