import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('crops')
export class CropEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'ID da cultura' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Algodão', description: 'Nome da cultura' })
  name: string;
}
