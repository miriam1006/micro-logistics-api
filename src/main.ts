import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <--- 1. Importar esto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. Activar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina datos extra que no estén en el DTO (Seguridad)
    forbidNonWhitelisted: true, // Lanza error si mandan datos basura
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();