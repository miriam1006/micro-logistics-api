import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // --- 2. CONFIGURACIÓN SWAGGER ---
  const config = new DocumentBuilder()
    .setTitle('Micro Logistics API')
    .setDescription('API para gestión de logística, envíos y conductores')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // La web estará en /api
  // --------------------------------

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();