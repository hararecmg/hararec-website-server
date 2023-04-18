import { Middleware } from "../../../config";
import { Controller } from "../../controllers";
import { HTTPVerb } from "../types/http-verbs.enum";

export interface RouteConfig {
    main_path: string;
    child_paths: Route | Route[];
}

export interface Route {
    method?: HTTPVerb;
    meta_name?: string;
    path: string;
    middlewares: Middleware | Middleware[];
    controller: Controller;
}