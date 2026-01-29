import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Driver } from '../../drivers/entities/driver.entity'; // Importamos al conductor

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    model: string; // Ej: Nissan Versa

    @Column({ unique: true })
    plate: string; // Placa: ABC-123

    // --- LA RELACIÓN ---
    // Un vehículo "pertenece" a un Conductor.
    // onDelete: 'SET NULL' significa que si borramos al conductor, 
    // el vehículo no se borra, solo se queda sin chofer (driverId = null).
    @ManyToOne(() => Driver, (driver) => driver.vehicles, { onDelete: 'SET NULL' })
    driver?: Driver | null;
}