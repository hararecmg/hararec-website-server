import express, { Application } from 'express';

export abstract class Server {

    protected _app: Application;
    protected _port: string;

    constructor(port: string) {
        this._app  = express();
        this._port = port;
        this.dataBaseConnection();
        this.configureMiddlewares();
    }

    abstract dataBaseConnection(): void;
    abstract configureMiddlewares(): void; 
    abstract listen(): void; 
}