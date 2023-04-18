import { Application } from "express";
import { Middleware } from "../interfaces/middlewares.interface.js";

export abstract class MiddlewareConfig {

    protected _middlewares: Middleware[];

    constructor(middlewares: Middleware[]) {
        this._middlewares = middlewares;
    }

    abstract init(app: Application): void; 
}