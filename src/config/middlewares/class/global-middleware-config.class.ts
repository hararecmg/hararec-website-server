import { Application, json } from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { MiddlewareConfig } from '../models/middleware-config.class';
import { customCors } from '../secure/cors-options';
import { limiter } from '../secure/rate-limit';

export class GlobalMiddlewareConfig extends MiddlewareConfig {

    constructor() {
        super([
            customCors,
            limiter,
            helmet(),
            json(),
            mongoSanitize(),
        ]);
    }

    init(app: Application): void {
        this._middlewares.forEach(middleware => app.use(middleware));
    }
}