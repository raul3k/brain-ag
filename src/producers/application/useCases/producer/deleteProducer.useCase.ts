import { ProducerRepository } from '../../../repositories/producer.repository';
import { Injectable } from '@nestjs/common';
import { DeleteResult, In } from 'typeorm';
import { CropRepository } from '../../../repositories/crop.repository';
import { UpdateProducerDto } from '../../../dto/update-producer.dto';

@Injectable()
export class DeleteProducerUseCase {
  constructor(
    private producerRepository: ProducerRepository,
    private cropRepository: CropRepository,
  ) {}
  async execute(id: number): Promise<DeleteResult> {
    return await this.producerRepository.delete(id);
  }

  private async setCrops(updateProducerDto: UpdateProducerDto) {
    return await this.cropRepository.find({
      where: { id: In([...updateProducerDto.crops]) },
    });
  }
}
