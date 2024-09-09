import { PartialType } from '@nestjs/mapped-types';
import { CreateProducerDto } from './create-producer.dto';
import { IsDocumentValid } from '../application/validators/document.validator';
import { IsOptional } from 'class-validator';

export class UpdateProducerDto extends PartialType(CreateProducerDto) {
  @IsDocumentValid()
  @IsOptional()
  document: string;
}
