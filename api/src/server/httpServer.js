import Hapi from '@hapi/hapi';

import ConnectToMongoDb from './mongodbServer';
import InitApolloServer from './apolloServer';
import { HttpServerConfiguration } from '../config';

const startServer = async () => {
    try {
        const server = Hapi.server({
            port: HttpServerConfiguration.PORT,
            host: HttpServerConfiguration.HOST
        });

        await ConnectToMongoDb();
        await InitApolloServer(server);
        await server.start();

        console.log('Server running on ', server.info.uri);
    } catch (err) {
        console.info(err);
    }
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

export default startServer;