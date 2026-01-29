import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Driver } from '../../drivers/entities/driver.entity';
import { Client } from '../../clients/entities/client.entity';
import { ShipmentLog } from '../../shipment-logs/entities/shipment-log.entity';
import { ShipmentStatus } from '../shipment-status.enum'; // <--- Importamos del nuevo archivo

@Entity()
export class Shipment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    pickupAddress: string;

    @Column()
    deliveryAddress: string;

    @Column({ type: 'enum', enum: ShipmentStatus, default: ShipmentStatus.PENDING })
    status: ShipmentStatus;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ nullable: true })
    deliveryDate: Date;

    @ManyToOne(() => Driver, (driver) => driver.shipments, { onDelete: 'SET NULL' })
    driver: Driver;

    @ManyToOne(() => Client, (client) => client.shipments, { onDelete: 'CASCADE' })
    client: Client;

    @OneToMany(() => ShipmentLog, (log) => log.shipment)
    logs: ShipmentLog[];
}