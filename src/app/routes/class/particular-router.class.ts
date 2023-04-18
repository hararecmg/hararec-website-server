import { Router } from "express";
import { Route, RouteConfig } from "../interfaces/route-config.interface";
import { ParticularRouteConfig } from "../models/particular-route-config.model";
import { HTTPVerb } from "../types/http-verbs.enum";

export class ParticularRouter extends ParticularRouteConfig {
    
    constructor(config: RouteConfig) {
        super(config);
    }
    
    createRoute({ method, path, middlewares, controller }: Route): Router {
        switch (method) {
            case HTTPVerb.GET:
                return this._router.get(path, middlewares, controller);
            case HTTPVerb.POST:
                return this._router.post(path, middlewares, controller);
            case HTTPVerb.PUT:
                return this._router.put(path, middlewares, controller);
                case HTTPVerb.DELETE:
                return this._router.delete(path, middlewares, controller);
            case HTTPVerb.HEAD:
                return this._router.head(path, middlewares, controller);
            case HTTPVerb.OPTIONS:
                return this._router.options(path, middlewares, controller);
            case HTTPVerb.PATCH:
                return this._router.patch(path, middlewares, controller);
            case HTTPVerb.CONNECT:
                return this._router.connect(path, middlewares, controller);
            case HTTPVerb.TRACE:
                return this._router.trace(path, middlewares, controller);
            default:
                return this._router.get(path, middlewares, controller);
        }
    }

    configureRoutes(): void {
        Array.isArray(this._routeConfig.child_paths)
            ? this._routeConfig.child_paths.forEach(this.createRoute)
            : this.createRoute(this._routeConfig.child_paths);
    }
    
    get router(): Router {
        return this._router;
    }

    get routeConfig(): RouteConfig {
        return this._routeConfig;
    }
}