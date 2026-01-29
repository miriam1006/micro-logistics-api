import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateShipmentDto {
    @IsString()
    @IsNotEmpty()
    pickupAddress: string;

    @IsString()
    @IsNotEmpty()
    deliveryAddress: string;

    @IsUUID()
    clientId: string; // ¿Quién lo pide?

    @IsUUID()
    driverId: string; // ¿Quién lo lleva?
}