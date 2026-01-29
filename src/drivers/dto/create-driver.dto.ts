import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';

export class CreateDriverDto {
    @IsString()
    @MinLength(3) // El nombre debe tener al menos 3 letras
    name: string;

    @IsEmail() // Verifica que parezca un correo real
    email: string;

    @IsString()
    phone: string;

    // No pedimos 'isActive' ni 'id' porque esos los genera el sistema automático
}