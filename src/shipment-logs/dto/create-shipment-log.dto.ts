import { IsString, IsUUID, IsEnum, IsOptional } from 'class-validator';
import { ShipmentStatus } from '../../shipments/shipment-status.enum'; // Importamos el Enum compartido

export class CreateShipmentLogDto {
    @IsUUID()
    shipmentId: string; // ¿A qué envío le pasó esto?

    @IsEnum(ShipmentStatus)
    status: ShipmentStatus; // Nuevo estado (ej: IN_TRANSIT)

    @IsString()
    @IsOptional()
    notes?: string; // Ej: "Recogido en recepción"
}