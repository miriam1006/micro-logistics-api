import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Shipment } from '../../shipments/entities/shipment.entity';
import { ShipmentStatus } from '../../shipments/shipment-status.enum'; // <--- Importamos del nuevo archivo

@Entity()
export class ShipmentLog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: ShipmentStatus })
    status: ShipmentStatus;

    @Column({ nullable: true })
    notes: string;

    @CreateDateColumn()
    timestamp: Date;

    @ManyToOne(() => Shipment, (shipment) => shipment.logs, { onDelete: 'CASCADE' })
    shipment: Shipment;
}