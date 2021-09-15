import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('health')
@ApiTags('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  health(): string {
    return this.appService.health();
  }
}
