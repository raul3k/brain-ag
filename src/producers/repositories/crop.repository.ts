import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CropEntity } from '../entities/crop.entity';

@Injectable()
export class CropRepository extends Repository<CropEntity> {
  constructor(private dataSource: DataSource) {
    super(CropEntity, dataSource.createEntityManager());
  }
}
