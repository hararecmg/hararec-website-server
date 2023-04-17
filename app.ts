import { RestServer } from './src/server';
import { PORT } from './src/config/environments/environment';

const restServer = new RestServer(PORT);
restServer.listen();