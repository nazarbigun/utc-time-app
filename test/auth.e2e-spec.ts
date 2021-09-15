import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/auth/login (POST)', () => {
    it('returns 201 if login successful', async () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({ username: 'john', password: 'aogwhw@42FsdaDF' })
        .expect(201);
    });

    it('returns 401 if login or password is invalid', async () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({ username: 'john', password: 'wrong password' })
        .expect(401);
    });
  });
});
