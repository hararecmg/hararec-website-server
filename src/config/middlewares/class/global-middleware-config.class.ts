import { Application, json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { MiddlewareConfig } from '../models/middleware-config.class.js';

export class GlobalMiddlewareConfig extends MiddlewareConfig {

    constructor() {
        super([
            cors(),
            helmet(),
            json(),
        ]);
    }

    init(app: Application): void {
        this._middlewares.forEach(middleware => app.use(middleware));
    }
}