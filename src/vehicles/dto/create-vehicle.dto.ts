import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

export class CreateVehicleDto {
    @IsString()
    model: string;

    @IsString()
    @MinLength(6) // Las placas suelen tener al menos 6 caracteres
    plate: string;

    @IsUUID()
    @IsOptional() // Opcional, por si queremos crear un auto sin dueño todavía
    driverId?: string;
}