import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TimeService } from './time.service';
import { UtcTimeView } from './views/utc-time.view';

@Controller('time')
@ApiTags('time')
@UseGuards(JwtAuthGuard)
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Get UTC time' })
  @ApiOkResponse({ description: 'Ok' })
  async getUtcTime(): Promise<UtcTimeView> {
    const time = this.timeService.getUtcTime();

    return new UtcTimeView(time);
  }
}
