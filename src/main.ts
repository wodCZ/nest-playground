import { NestFactory } from '@nestjs/core';
import { ExpressModule } from './express.module';

async function bootstrap() {
  const app = await NestFactory.create(ExpressModule);
  await app.listen(3000);
}
bootstrap();
