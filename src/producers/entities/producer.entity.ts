import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CropEntity } from './crop.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'producers' })
export class ProducerEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'ID do produtor' })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: '999.999.999-99', description: 'CPF/CNPJ válido' })
  document: string;

  @Column()
  @ApiProperty({ example: 'Roberto Carlos', description: 'Nome do produtor' })
  name: string;

  @Column({ name: 'farm_name' })
  @ApiProperty({
    example: 'Fazenda de Serra Talhada',
    description: 'Nome da fazenda',
  })
  farmName: string;

  @Column()
  @ApiProperty({
    example: 'Serra',
    description: 'Cidade onde a fazenda fica localizada',
  })
  city: string;

  @Column()
  @ApiProperty({
    example: 'Espirito Santo',
    description: 'Estado onde a fazenda fica localizada',
  })
  state: string;

  @Column()
  @ApiProperty({ example: 1200, description: 'Número de hectares' })
  hectares: number;

  @Column({ name: 'arable_area' })
  @ApiProperty({
    example: 700,
    description: 'Area agricutavel total da fazenda',
  })
  arableArea: number;

  @Column({ name: 'vegetation_area' })
  @ApiProperty({ example: 400, description: 'Area total de vegetação' })
  vegetationArea: number;

  @ManyToMany(() => CropEntity, { cascade: true, onUpdate: 'CASCADE' })
  @JoinTable()
  @ApiProperty({
    example: [1, 2, 3],
    description: 'Lista de culturas da fazenda.',
  })
  crops: CropEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
