import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getList from './getList';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {cors: true});
	getList("Marvel_Staff/Writers");
	getList("Marvel_Staff/Pencilers");
	getList("Marvel_Staff/Inkers");
	getList("Marvel_Staff/Colorists");
	getList("Marvel_Staff/Letterers");
	getList("Marvel_Staff/Editors");
	getList("Characters");
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
