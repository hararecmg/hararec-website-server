import { Server as SocketIOServer } from 'socket.io';
import { createServer, Server as HttpServer } from 'http';
import { ConfigureSockets } from '../interfaces/configuration.interface';
import { Server } from '../models/serve.model';

export class SocketServer extends Server implements ConfigureSockets {

    private server: HttpServer;
    private io: SocketIOServer;
    
    constructor(port: string) {
        super(port);
        this.server = createServer(this._app);
        this.io = require('socket.io')(this.server);
        this.configureSockets();
    }
    
    configureSockets(): void {
        // this.io.on('connection', (socket: SocketIO.Socket) => {
        //     console.log(`Client connected ${socket.id}`);
        //     socket.on('disconnect', () => {
        //         console.log(`Client disconnected ${socket.id}`);
        //     });
        // });
    }

    dataBaseConnection(): void {
    }

    configureMiddlewares(): void {
    }

    listen() {
        this.server.listen( this._port, () => {
            console.log(`The server is running on port ${this._port}`)
        } );
    }

}