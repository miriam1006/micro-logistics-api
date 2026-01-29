import { PartialType } from '@nestjs/mapped-types';
import { CreateShipmentLogDto } from './create-shipment-log.dto';

export class UpdateShipmentLogDto extends PartialType(CreateShipmentLogDto) {}
