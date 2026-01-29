import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from './entities/shipment.entity';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) { }

  async create(createShipmentDto: CreateShipmentDto) {
    // Extraemos los IDs para manejarlos aparte
    const { clientId, driverId, ...data } = createShipmentDto;

    const shipment = this.shipmentRepository.create({
      ...data,
      client: { id: clientId }, // Conexión automática por ID
      driver: { id: driverId }, // Conexión automática por ID
    });

    return await this.shipmentRepository.save(shipment);
  }

  findAll() {
    // Traemos las relaciones para ver quién es el cliente y el chofer
    return this.shipmentRepository.find({ relations: ['client', 'driver'] });
  }

  findOne(id: string) {
    return this.shipmentRepository.findOne({
      where: { id },
      relations: ['client', 'driver', 'logs'] // También traemos la bitácora
    });
  }

  update(id: string, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: string) {
    return `This action removes a #${id} shipment`;
  }
}