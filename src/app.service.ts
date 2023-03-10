import { Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class AppService {
  private readonly startedAt = new Date();
  constructor(private readonly httpHost: HttpAdapterHost) {}
  getHello(): string {
    return `The ${this.httpHost.httpAdapter.getType()} server is up and running for ${
      (Date.now() - this.startedAt.getTime()) / 1000
    } seconds.`;
  }
}
