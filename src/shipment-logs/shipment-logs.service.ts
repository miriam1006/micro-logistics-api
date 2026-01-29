import { Injectable } from '@nestjs/common';
import { CreateShipmentLogDto } from './dto/create-shipment-log.dto';
import { UpdateShipmentLogDto } from './dto/update-shipment-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShipmentLog } from './entities/shipment-log.entity';
import { Shipment } from '../shipments/entities/shipment.entity'; // Necesitamos acceder al envío padre

@Injectable()
export class ShipmentLogsService {
  constructor(
    @InjectRepository(ShipmentLog)
    private readonly logsRepository: Repository<ShipmentLog>,

    // Inyectamos el repositorio de Shipment para poder actualizarlo
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) { }

  async create(createShipmentLogDto: CreateShipmentLogDto) {
    // 1. Crear el Log
    const log = this.logsRepository.create({
      ...createShipmentLogDto,
      shipment: { id: createShipmentLogDto.shipmentId },
    });
    const savedLog = await this.logsRepository.save(log);

    // 2. ACTUALIZACIÓN AUTOMÁTICA
    // Actualizamos el estado del envío padre para que coincida con el último log
    await this.shipmentRepository.update(createShipmentLogDto.shipmentId, {
      status: createShipmentLogDto.status,
    });

    return savedLog;
  }

  findAll() {
    return this.logsRepository.find({ relations: ['shipment'] });
  }

  findOne(id: string) {
    return this.logsRepository.findOneBy({ id });
  }

  update(id: string, updateShipmentLogDto: UpdateShipmentLogDto) {
    return `This action updates a #${id} shipmentLog`;
  }

  remove(id: string) {
    return `This action removes a #${id} shipmentLog`;
  }
}