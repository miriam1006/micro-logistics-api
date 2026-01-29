import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) { }

  async create(createClientDto: CreateClientDto) {
    const client = this.clientRepository.create(createClientDto);
    return await this.clientRepository.save(client);
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOneBy({ id });
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: string) {
    return `This action removes a #${id} client`;
  }
}