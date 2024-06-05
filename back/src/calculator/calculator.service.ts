import { Injectable } from '@nestjs/common';
import { CreateCalculatorDto } from './dto/create-calculator.dto';

@Injectable()
export class CalculatorService {
  calculateTotalArea(wallsInfo: CreateCalculatorDto[]): number {
    let sumArea = 0;

    wallsInfo.forEach((wall: CreateCalculatorDto) => {
      const totalArea = wall.height * wall.width;
      const doorArea = 1.52;
      const windowArea = 2.4;

      sumArea +=
        totalArea -
        wall.doorsQuantity * doorArea -
        wall.windowsQuantity * windowArea;
    });

    return sumArea;
  }

  calculateTins(area: number) {
    const paintNeeded = area / 5;

    const tinSizes = [18, 3.6, 2.5, 0.5];
    const tinResults = [];

    let remainingPaint = paintNeeded;
    for (const size of tinSizes) {
      const numTins = Math.floor(remainingPaint / size);

      if (numTins > 0) {
        const tinDetail = {
          quantity: numTins,
          size: size,
        };
        tinResults.push(tinDetail);

        remainingPaint -= numTins * size;
      }
    }

    return tinResults;
  }

  calculateLiters(tins: Array<any>): number {
    let liters = 0;

    tins.forEach(({ quantity, size }) => {
      liters += quantity * size;
    });

    return liters;
  }

  create(wallsInfo: CreateCalculatorDto[]) {
    const totalArea = this.calculateTotalArea(wallsInfo);

    const result = this.calculateTins(totalArea);

    const litersNeeded = this.calculateLiters(result);

    return {
      area: totalArea,
      liters: litersNeeded,
      tins: result,
    };
  }
}
