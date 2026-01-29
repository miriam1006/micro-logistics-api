import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    // 1. Cargar variables de entorno (.env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 2. Conectar a Base de Datos Supabase
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Crea las tablas automáticamente (solo para desarrollo)
      ssl: {
        rejectUnauthorized: false, // Necesario para conexiones seguras a Supabase
      },
    }),

    DriversModule,

    VehiclesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }