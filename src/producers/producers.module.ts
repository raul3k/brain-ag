import { Module } from '@nestjs/common';
import { ProducersService } from './services/producers.service';
import { ProducersController } from './controllers/producers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerRepository } from './repositories/producer.repository';
import { ProducerEntity } from './entities/producer.entity';
import { CreateProducerUseCase } from './application/useCases/producer/createProducer.useCase';
import { CropEntity } from './entities/crop.entity';
import { GetAllProducerUseCase } from './application/useCases/producer/getAllProducer.useCase';
import { GetOneProducerUseCase } from './application/useCases/producer/getOneProducer.useCase';
import { CropRepository } from './repositories/crop.repository';
import { UpdateProducerUseCase } from './application/useCases/producer/updateProducer.useCase';
import { DeleteProducerUseCase } from './application/useCases/producer/deleteProducer.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([ProducerEntity, CropEntity])],
  controllers: [ProducersController],
  providers: [
    ProducersService,
    ProducerRepository,
    CropRepository,
    CreateProducerUseCase,
    GetAllProducerUseCase,
    GetOneProducerUseCase,
    UpdateProducerUseCase,
    DeleteProducerUseCase,
  ],
})
export class ProducersModule {}
