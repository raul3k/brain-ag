import { ProducerEntity } from '../../../entities/producer.entity';
import { ProducerRepository } from '../../../repositories/producer.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllProducerUseCase {
  constructor(private repository: ProducerRepository) {}

  async execute(): Promise<Array<ProducerEntity>> {
    return this.repository.find();
  }
}
