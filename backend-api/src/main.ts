import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Full Clothing Store API')
    .setDescription('The API description for the Full Clothing Store App')
    .setVersion('1.0')
    .addTag('clothing')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3002);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3002}/api`);
}
bootstrap();
