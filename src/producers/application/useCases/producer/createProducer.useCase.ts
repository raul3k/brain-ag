import { CreateProducerDto } from '../../../dto/create-producer.dto';
import { ProducerEntity } from '../../../entities/producer.entity';
import { ProducerRepository } from '../../../repositories/producer.repository';
import { Injectable } from '@nestjs/common';
import { In } from 'typeorm';
import { CropRepository } from '../../../repositories/crop.repository';

@Injectable()
export class CreateProducerUseCase {
  constructor(
    private producerRepository: ProducerRepository,
    private cropRepository: CropRepository,
  ) {}
  async execute(createProducerDto: CreateProducerDto): Promise<ProducerEntity> {
    const crops = await this.cropRepository.find({
      where: { id: In([...createProducerDto.crops]) },
    });
    createProducerDto.document = createProducerDto.document.replace(
      /[^0-9]/g,
      '',
    );
    createProducerDto.crops = crops;

    const saved = await this.producerRepository.save(createProducerDto);

    return this.producerRepository.findOneBy({
      document: saved.document,
    });
  }
}
