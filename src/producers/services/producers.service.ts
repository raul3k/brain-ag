import { Injectable } from '@nestjs/common';
import { CreateProducerDto } from '../dto/create-producer.dto';
import { UpdateProducerDto } from '../dto/update-producer.dto';
import { CreateProducerUseCase } from '../application/useCases/producer/createProducer.useCase';
import { GetAllProducerUseCase } from '../application/useCases/producer/getAllProducer.useCase';
import { GetOneProducerUseCase } from '../application/useCases/producer/getOneProducer.useCase';
import { UpdateProducerUseCase } from '../application/useCases/producer/updateProducer.useCase';
import { DeleteProducerUseCase } from '../application/useCases/producer/deleteProducer.useCase';

@Injectable()
export class ProducersService {
  constructor(
    private createProducer: CreateProducerUseCase,
    private getAllProducerUseCase: GetAllProducerUseCase,
    private getOneProducerUseCase: GetOneProducerUseCase,
    private updateProducerUseCase: UpdateProducerUseCase,
    private deleteProducerUseCase: DeleteProducerUseCase,
  ) {}
  create(createProducerDto: CreateProducerDto) {
    return this.createProducer.execute(createProducerDto);
  }

  findAll() {
    return this.getAllProducerUseCase.execute();
  }

  findOne(id: number) {
    return this.getOneProducerUseCase.execute(id);
  }

  update(id: number, updateProducerDto: UpdateProducerDto) {
    return this.updateProducerUseCase.execute(id, updateProducerDto);
  }

  remove(id: number) {
    return this.deleteProducerUseCase.execute(id);
  }
}
