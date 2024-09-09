import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { isCNPJ, isCPF } from 'validation-br';

export function IsDocumentValid(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: Document,
    });
  };
}

@ValidatorConstraint({ name: 'IsDocumentValid', async: false })
@Injectable()
export class Document implements ValidatorConstraintInterface {
  validate(value: string) {
    value = value.replace(/[^0-9]/g, '');
    return isCPF(value) || isCNPJ(value);
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'Document is invalid';
  }
}
