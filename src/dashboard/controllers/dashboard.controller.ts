import { Controller, Get } from '@nestjs/common';
import { DashboardService } from '../services/dashboard.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private service: DashboardService) {}
  @Get('total-farms-area')
  @ApiOperation({ summary: 'Get total farms and area' })
  async getTotalFarmsAndArea() {
    return this.service.getTotalFarmsAndArea();
  }

  @Get('farms-by-state')
  @ApiOperation({ summary: 'Get farms by state' })
  async getFarmsByState() {
    return this.service.getFarmsByState();
  }

  @Get('farms-by-crop')
  @ApiOperation({ summary: 'Get farms by crop' })
  async getFarmsByCrop() {
    return this.service.getFarmsByCrop();
  }

  @Get('land-use')
  @ApiOperation({ summary: 'Get information about land use' })
  async getLandUse() {
    return this.service.getLandUse();
  }
}
