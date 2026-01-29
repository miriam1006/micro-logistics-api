import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity'; // Importamos Vehículo
import { Shipment } from '../../shipments/entities/shipment.entity'; // Importamos Envío

@Entity()
export class Driver {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    // --- RELACIÓN 1: Vehículos ---
    // Esto es lo que le faltaba y causaba el error en Vehicle
    @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
    vehicles: Vehicle[];

    // --- RELACIÓN 2: Envíos (Ya que estamos aquí, la dejamos lista) ---
    @OneToMany(() => Shipment, (shipment) => shipment.driver)
    shipments: Shipment[];
}