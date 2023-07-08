import { AppService } from './app.service';
declare class Request {
    characters: string;
    writers: string;
    pencilers: string;
    inkers: string;
    colorists: string;
    letterers: string;
    editors: string;
}
declare class ListRequest {
    category: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createMessage(message: Request): Promise<string>;
    createMessage2(message: ListRequest): Promise<string>;
}
export {};
