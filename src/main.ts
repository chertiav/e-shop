import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT;
	await app.listen(port);
}
bootstrap();
