import { ProducerEntity } from '../../../entities/producer.entity';
import { ProducerRepository } from '../../../repositories/producer.repository';
import { Injectable } from '@nestjs/common';
import { CropRepository } from '../../../repositories/crop.repository';

@Injectable()
export class GetOneProducerUseCase {
  constructor(
    private repository: ProducerRepository,
    private cropRepository: CropRepository,
  ) {}

  execute(id: number): Promise<ProducerEntity> {
    return this.repository.findOne({
      where: { id },
      relations: ['crops'],
    });
  }
}
