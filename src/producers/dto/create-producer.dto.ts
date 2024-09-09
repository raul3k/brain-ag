import { IsNotEmpty } from 'class-validator';
import { IsDocumentValid } from '../application/validators/document.validator';
import { IsFarmAreaValid } from '../application/validators/farmArea.validator';
import { IsDocumentUnique } from '../application/validators/unique.validator';
import { CropEntity } from '../entities/crop.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProducerDto {
  @IsNotEmpty()
  @IsDocumentValid()
  @IsDocumentUnique()
  @ApiProperty({ name: 'document', description: 'CPF/CNPJ' })
  document: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do fazendeiro' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Nome da fazenda' })
  farmName: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Cidade onde fica a fazenda' })
  city: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Estado onde fica a fazenda' })
  state: string;

  @IsNotEmpty()
  @IsFarmAreaValid('arableArea', 'vegetationArea')
  @ApiProperty({ description: 'Número de hectares' })
  hectares: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Area agricultavel' })
  arableArea: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Area de vegetação' })
  vegetationArea: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Culturas da fazenda' })
  crops: CropEntity[];
}
