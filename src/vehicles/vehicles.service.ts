import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {

  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) { }

  async create(createVehicleDto: CreateVehicleDto) {
    const { driverId, ...vehicleData } = createVehicleDto;

    const vehicle = this.vehicleRepository.create({
      ...vehicleData,
      // Si hay ID, creamos el objeto. Si no, mandamos undefined.
      driver: driverId ? { id: driverId } : undefined,
    });

    return await this.vehicleRepository.save(vehicle);
  }

  findAll() {
    // El "relations: ['driver']" es CLAVE. 
    // Sin esto, te traería el vehículo pero NO quién lo maneja.
    return this.vehicleRepository.find({ relations: ['driver'] });
  }

  findOne(id: string) {
    return this.vehicleRepository.findOne({
      where: { id },
      relations: ['driver']
    });
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) { // id: string
    return `This action updates a #${id} vehicle`;
  }

  remove(id: string) { // id: string
    return `This action removes a #${id} vehicle`;
  }
}