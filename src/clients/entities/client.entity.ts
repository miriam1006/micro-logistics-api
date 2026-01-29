import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Shipment } from '../../shipments/entities/shipment.entity';

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    address: string;

    @CreateDateColumn()
    createdAt: Date;

    // Un cliente tiene muchos envíos
    @OneToMany(() => Shipment, (shipment) => shipment.client)
    shipments: Shipment[];
}