import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

/*   const config = new DocumentBuilder()
    .setTitle('StudyIn')
    .setDescription('StudyIn API description')
    .setVersion('1.0')
    .addTag('StudyIn')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); */


  await app.listen(process.env.APP_PORT);
}
bootstrap();
