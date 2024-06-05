import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Cálculo')
@Controller('calcular')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @ApiBody({
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          height: {
            type: 'number',
            example: 2.5,
          },
          width: {
            type: 'number',
            example: 5,
          },
          doorsQuantity: {
            type: 'number',
            example: 1,
          },
          windowsQuantity: {
            type: 'number',
            example: 1,
          },
        },
      },
      example: [
        {
          height: 2.5,
          width: 5,
          doorsQuantity: 1,
          windowsQuantity: 1,
        },
        {
          height: 2.5,
          width: 4,
          doorsQuantity: 0,
          windowsQuantity: 2,
        },
        {
          height: 3,
          width: 3,
          doorsQuantity: 1,
          windowsQuantity: 1,
        },
        {
          height: 2.2,
          width: 4.5,
          doorsQuantity: 0,
          windowsQuantity: 1,
        },
      ],
    },
  })
  @Post()
  create(@Body() createCalculatorDto: CreateCalculatorDto[]) {
    return this.calculatorService.create(createCalculatorDto);
  }
}
