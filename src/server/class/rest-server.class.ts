import { GlobalMiddlewareConfig } from '../../config/middlewares';
import { ConfigureRoutes } from '../interfaces/configuration.interface';
import { Server } from '../models/server.model';

export class RestServer extends Server implements ConfigureRoutes {
    
    constructor(port: string) {
        super(port);
        this.configureRoutes();
    }

    configureRoutes(): void {
    }

    dataBaseConnection(): void {
    }

    configureMiddlewares(): void {
        const globalMiddlewareConfig = new GlobalMiddlewareConfig();
        globalMiddlewareConfig.init(this._app);
    }

    listen() {
        this._app.listen( this._port, () => {
            console.log(`The server is running on port ${this._port}`)
        } );
    }

}