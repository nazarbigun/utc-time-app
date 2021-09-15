import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

class MockDate extends Date {
  constructor() {
    super('December 17, 1995 03:24:47'); // add whatever date you'll expect to get
  }
}

global.Date = MockDate as unknown as typeof Date;

describe('TimeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/time (GET)', async () => {
    const { body } = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'john', password: 'aogwhw@42FsdaDF' });

    return request(app.getHttpServer())
      .get('/time')
      .set({ Authorization: `Bearer ${body.access_token}` })
      .expect(200)
      .expect({ time: '3:24:47' });
  });
});
