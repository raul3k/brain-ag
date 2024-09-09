import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CropDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Soja, Milho, Algodão, Café, Cana de Açucar' })
  name: string; // Soja, Milho, Algodão, Café, Cana de Açucar
}
