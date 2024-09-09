import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ProducersService } from '../services/producers.service';
import { CreateProducerDto } from '../dto/create-producer.dto';
import { UpdateProducerDto } from '../dto/update-producer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('agriculture')
@Controller('producers')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a producer' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'CREATED' })
  create(@Body() createProducerDto: CreateProducerDto) {
    return this.producersService.create(createProducerDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all producers' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All producers' })
  findAll() {
    return this.producersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List producer of given id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all information of one producer',
  })
  async findOne(@Param('id') id: string) {
    const producer = await this.producersService.findOne(+id);

    if (!producer) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return producer;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update producer' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'No response' })
  async update(
    @Param('id') id: string,
    @Body() updateProducerDto: UpdateProducerDto,
  ) {
    const producer = await this.producersService.findOne(+id);

    if (!producer) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return this.producersService.update(+id, updateProducerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a producer and all related crops' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  async remove(@Param('id') id: string, @Res() res) {
    const producer = await this.producersService.findOne(+id);

    if (!producer) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    await this.producersService.remove(+id);

    res.status(HttpStatus.NO_CONTENT).send();
  }
}
