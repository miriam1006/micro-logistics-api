import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity() // Esto le dice a TypeORM que esta clase es una tabla SQL
export class Driver {
    @PrimaryGeneratedColumn('uuid') // Genera un ID único y complejo automáticamente
    id: string;

    @Column()
    name: string;

    @Column({ unique: true }) // El email no se puede repetir
    email: string;

    @Column()
    phone: string;

    @Column({ default: true }) // Por defecto, el conductor está activo
    isActive: boolean;

    @CreateDateColumn() // Guarda la fecha de creación automáticamente
    createdAt: Date;
}