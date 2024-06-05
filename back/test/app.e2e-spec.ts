import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateCalculatorDto } from '../src/calculator/dto/create-calculator.dto';

describe('CalculatorController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/calcular (POST)', async () => {
    const testData: CreateCalculatorDto[] = [
      {
        height: 5,
        width: 10,
        doorsQuantity: 1,
        windowsQuantity: 1,
      },
      {
        height: 5,
        width: 10,
        doorsQuantity: 1,
        windowsQuantity: 1,
      },
      {
        height: 5,
        width: 10,
        doorsQuantity: 1,
        windowsQuantity: 1,
      },
      {
        height: 5,
        width: 10,
        doorsQuantity: 1,
        windowsQuantity: 1,
      },
    ];

    const expectedResult = {
      area: 184.32,
      liters: 36.5,
      tins: [
        { quantity: 2, size: 18 },
        { quantity: 1, size: 0.5 },
      ],
    };

    const response = await request(app.getHttpServer())
      .post('/calcular')
      .send(testData)
      .expect(200);

    expect(response.body).toEqual(expectedResult);
  });
});
