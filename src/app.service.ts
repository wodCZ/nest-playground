import { Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(private readonly httpHost: HttpAdapterHost) {}
  getHello(): string {
    return `Hello World from ${this.httpHost.httpAdapter.getType()}`;
  }
}
