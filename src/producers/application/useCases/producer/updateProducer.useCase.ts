import { ProducerEntity } from '../../../entities/producer.entity';
import { ProducerRepository } from '../../../repositories/producer.repository';
import { Injectable } from '@nestjs/common';
import { In } from 'typeorm';
import { CropRepository } from '../../../repositories/crop.repository';
import { UpdateProducerDto } from '../../../dto/update-producer.dto';

@Injectable()
export class UpdateProducerUseCase {
  constructor(
    private producerRepository: ProducerRepository,
    private cropRepository: CropRepository,
  ) {}
  async execute(
    id: number,
    updateProducerDto: UpdateProducerDto,
  ): Promise<ProducerEntity> {
    if (updateProducerDto.crops.length) {
      updateProducerDto.crops = await this.setCrops(updateProducerDto);
    }

    updateProducerDto.document = updateProducerDto.document.replace(
      /[^0-9]/g,
      '',
    );

    const updatedEntity = await this.producerRepository.findOne({ where: { id } });

    Object.assign(updatedEntity, updateProducerDto);

    return await this.producerRepository.save(updatedEntity);
  }

  private async setCrops(updateProducerDto: UpdateProducerDto) {
    return await this.cropRepository.find({
      where: { id: In([...updateProducerDto.crops]) },
    });
  }
}
