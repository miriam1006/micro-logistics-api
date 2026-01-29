import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <--- Importante
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { Driver } from './entities/driver.entity'; // <--- Importamos tu entidad

@Module({
  imports: [TypeOrmModule.forFeature([Driver])], // <--- Aquí registramos la tabla
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule { }