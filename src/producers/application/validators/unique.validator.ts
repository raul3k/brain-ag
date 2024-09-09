import { INestApplicationContext, Inject, Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

/** interfaces */
import { ProducerEntity } from '../../entities/producer.entity';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../../app.module';
import { ProducerRepository } from '../../repositories/producer.repository';

@ValidatorConstraint({ name: 'EmailExist', async: true })
@Injectable()
export class IsDocumentUniqueValidator implements ValidatorConstraintInterface {
  constructor(
    @Inject(ProducerEntity) private readonly producerEntity: ProducerEntity,
  ) {}

  async validate(value: string): Promise<boolean> {
    try {
      value = value.replace(/[^0-9]/g, '');
      const app: INestApplicationContext =
        await NestFactory.createApplicationContext(AppModule);

      const producerRepository: ProducerRepository =
        app.get(ProducerRepository);

      return !(await producerRepository.findOneBy({ document: value }));
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  defaultMessage(): string {
    return 'Document already registered';
  }
}

export const IsDocumentUnique = (validationOptions?: ValidationOptions) => {
  return (object: unknown, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsDocumentUniqueValidator,
    });
  };
};
