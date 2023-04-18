import { Application } from "express";
import { GeneralRouteConfig } from "../models/general-route-config.model";

export class GlobalRouter extends GeneralRouteConfig {
    
    constructor() {
        super([]);
    }

    init(app: Application): void {
        Array.isArray(this._particularRouters)
            ? this._particularRouters.forEach( router => {
                app.use(router.routeConfig.main_path, router.router);
            })
            : app.use(
                this._particularRouters.routeConfig.main_path,
                this._particularRouters.router
            );
    }
}