declare class Request {
    characters: string;
    writers: string;
    pencilers: string;
    inkers: string;
    colorists: string;
    letterers: string;
    editors: string;
}
export default function getComics(request: Request): Promise<string>;
export {};
