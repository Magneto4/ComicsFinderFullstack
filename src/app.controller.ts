import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import getList from './getList';
import getComics from './getComics';


class Request {
	characters: string[];
	colorists: string[];
	editors: string[];
	inkers: string[];
	letterers: string[];
	pencilers: string[];
	writers: string[];
}

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return "this is a test string";
	}

	@Post('/appearances')
	async createMessage(@Body() message: Request){
		console.log("/appearances");
		console.log(message);
		return await getComics(message);
	}

	@Get('/list/:category')
	async createMessage2(@Param('category') category: string) {
		console.log("/list");
		return await getList(category);
	}

	@Get('/list/Marvel_Staff/:category')
	async createMessage3(@Param('category') category: string) {
		console.log("/list");
		return await getList("Marvel_Staff/" + category);
	}
}
