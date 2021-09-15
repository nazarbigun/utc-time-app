import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  getUtcTime(): string {
    const now = new Date();

    return `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
  }
}
