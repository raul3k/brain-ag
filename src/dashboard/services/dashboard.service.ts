import { Injectable } from '@nestjs/common';
import { DashboardRepository } from '../repository/dashboard.repository';

@Injectable()
export class DashboardService {
  constructor(private repository: DashboardRepository) {}
  getTotalFarmsAndArea() {
    return this.repository.getTotalFarmsAndArea();
  }

  getFarmsByState() {
    return this.repository.getFarmsByState();
  }

  getFarmsByCrop() {
    return this.repository.getFarmsByCrop();
  }

  getLandUse() {
    return this.repository.getLandUse();
  }
}
