import { Application } from 'express';
import { ParticularRouter } from '../class/particular-router.class';

export abstract class GeneralRouteConfig {

    protected _particularRouters: ParticularRouter | ParticularRouter[];

    constructor(particularRouters: ParticularRouter | ParticularRouter[]) {
        this._particularRouters = particularRouters;
    }

    abstract init(app: Application): void;

}