import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm'; // <--- Necesario para inyectar
import { Repository } from 'typeorm'; // <--- Necesario para usar métodos de BD
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {

  // 1. Inyectamos el repositorio de Drivers (nuestra conexión a la tabla)
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) { }

  // 2. Lógica para crear
  async create(createDriverDto: CreateDriverDto) {
    // Crea una instancia del driver con los datos recibidos
    const driver = this.driverRepository.create(createDriverDto);
    // Lo guarda en la base de datos (INSERT)
    return await this.driverRepository.save(driver);
  }

  findAll() {
    return this.driverRepository.find(); // SELECT * FROM driver
  }

  findOne(id: string) {
    return this.driverRepository.findOneBy({ id }); // SELECT * FROM driver WHERE id = X
  }

  update(id: string, updateDriverDto: UpdateDriverDto) {
    return `This action updates a #${id} driver`;
  }

  remove(id: string) {
    return `This action removes a #${id} driver`;
  }
}