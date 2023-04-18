import { Router } from 'express';
import { RouteConfig, Route } from '../interfaces/route-config.interface';

export abstract class ParticularRouteConfig {

    protected _router: Router;
    protected _routeConfig: RouteConfig;

    constructor(config: RouteConfig) {
        this._router = Router();
        this._routeConfig = config;
        this.configureRoutes();
    }

    abstract createRoute(route: Route): Router;
    abstract configureRoutes(): void;
    abstract get router(): Router;
    abstract get routeConfig(): RouteConfig;
}