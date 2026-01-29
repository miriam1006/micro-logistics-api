import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity'; // <--- 1. Importar Vehicle

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

    // --- 2. LA RELACIÓN INVERSA ---
    // Un Conductor puede tener "Muchos" vehículos (OneToMany)
    @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
    vehicles: Vehicle[];
}