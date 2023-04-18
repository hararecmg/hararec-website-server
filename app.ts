import { RestServer } from './src/server';
import { PORT } from './src/config';

const restServer = new RestServer(PORT);
restServer.listen();