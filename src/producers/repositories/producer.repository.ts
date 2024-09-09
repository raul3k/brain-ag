import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProducerEntity } from '../entities/producer.entity';

@Injectable()
export class ProducerRepository extends Repository<ProducerEntity> {
  constructor(private dataSource: DataSource) {
    super(ProducerEntity, dataSource.createEntityManager());
  }
}
