import { join } from 'path';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestApplication>(AppModule);
    app.useStaticAssets(join(__dirname, '..', 'public'));

    await app.listen(process.env.PORT || 3000, () => {
        Logger.log(`✅ Server is running on port http://localhost:3000`, NestApplication.name);
    });
}
bootstrap();

