import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardRepository {
  constructor(private dataSource: DataSource) {}

  async getTotalFarmsAndArea() {
    const totalProducers = await this.dataSource.query(
      'select count(id) as total_producers from producers;',
    );
    const totalArea = await this.dataSource.query(
      'select sum(hectares) as total_area from producers;',
    );
    return {
      totalProducers: parseInt(totalProducers[0].total_producers),
      totalArea: parseInt(totalArea[0].total_area),
    };
  }

  async getFarmsByState() {
    return await this.dataSource.query(
      'select count(state) as total, state from producers group by state;',
    );
  }

  async getFarmsByCrop() {
    return this.dataSource.query(
      'select crops.name, count(crops.name) as total from producers\n' +
        'left join producers_crops_crops on producers.id = producers_crops_crops."producersId"\n' +
        'left join crops on producers_crops_crops."cropsId" = crops.id\n' +
        'group by crops.name;',
    );
  }

  async getLandUse() {
    return this.dataSource.query(
      'select\n' +
        '    state,\n' +
        '    sum(arable_area) as arable,\n' +
        '    sum(vegetation_area) as vegetation\n' +
        'from producers\n' +
        'group by state;',
    );
  }
}
