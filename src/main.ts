import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   const documentOptions = new DocumentBuilder()
.setTitle('Pets Vet')
.setDescription('Api de Mascotas')
.setVersion('0.1')
.build();
const document = SwaggerModule.createDocument(app,documentOptions);
SwaggerModule.setup('api',app,document);
  await app.listen(3950);
}
bootstrap();
