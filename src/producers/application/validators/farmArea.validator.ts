import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function IsFarmAreaValid(
  arableArea: string,
  vegetationArea: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [arableArea, vegetationArea],
      validator: farmAreaConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'IsFarmAreaValid' })
export class farmAreaConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [arableArea, vegetationArea] = args.constraints;

    const arableAreaValue = (args.object as any)[arableArea];
    const vegetationAreaValue = (args.object as any)[vegetationArea];

    return arableAreaValue + vegetationAreaValue <= value;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'The sum of arableArea and vegetationArea cannot be higher than farmArea';
  }
}
