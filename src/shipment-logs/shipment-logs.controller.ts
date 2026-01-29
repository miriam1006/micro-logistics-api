import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShipmentLogsService } from './shipment-logs.service';
import { CreateShipmentLogDto } from './dto/create-shipment-log.dto';
import { UpdateShipmentLogDto } from './dto/update-shipment-log.dto';

@Controller('shipment-logs')
export class ShipmentLogsController {
  constructor(private readonly shipmentLogsService: ShipmentLogsService) { }

  @Post()
  create(@Body() createShipmentLogDto: CreateShipmentLogDto) {
    return this.shipmentLogsService.create(createShipmentLogDto);
  }

  @Get()
  findAll() {
    return this.shipmentLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) { // String
    return this.shipmentLogsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipmentLogDto: UpdateShipmentLogDto) {
    return this.shipmentLogsService.update(id, updateShipmentLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentLogsService.remove(id);
  }
}