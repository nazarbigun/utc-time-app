import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeModule } from './time/time.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TimeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
