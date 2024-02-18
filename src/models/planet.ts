import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('planets')
export class Planet {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column()
  diametro: string;

  @Column()
  periodo_rotacion: string;

  @Column()
  periodo_orbital: string;

  @Column()
  gravedad: string;

  @Column()
  poblacion: string;

  @Column()
  clima: string;

  @Column()
  terreno: string;

  @Column()
  superficie_agua: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  edited: Date;

}
