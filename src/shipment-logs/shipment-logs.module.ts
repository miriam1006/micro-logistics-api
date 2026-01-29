import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentLogsService } from './shipment-logs.service';
import { ShipmentLogsController } from './shipment-logs.controller';
import { ShipmentLog } from './entities/shipment-log.entity';
import { Shipment } from '../shipments/entities/shipment.entity'; // <--- Importar Shipment

@Module({
  // Registramos AMBAS entidades aquí
  imports: [TypeOrmModule.forFeature([ShipmentLog, Shipment])],
  controllers: [ShipmentLogsController],
  providers: [ShipmentLogsService],
})
export class ShipmentLogsModule { }