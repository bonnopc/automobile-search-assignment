import Mongoose from 'mongoose';
import { MongooseConfiguration } from '../config';

Mongoose.Promise = global.Promise;


Mongoose.connection.on('disconnected', () => {
    console.error(`!!!!!!!!!! Database Disconnected @ ${MongooseConfiguration.databaseConnection.uri()} !!!!!!!!!!`);
});

Mongoose.connection.on('reconnected', () => {
    console.warn(`!!!!!!!!!! Database Reconnected @ ${MongooseConfiguration.databaseConnection.uri()} !!!!!!!!!!`);
});

Mongoose.connection.on('close', () => {
    console.log('Connection Closed')
})

Mongoose.connection.on('error', (err) => {
    console.error('error', err);
});

const ConnectToMongoDb = async() => {

    // Mongoose Connection Information
    await Mongoose.connect(MongooseConfiguration.databaseConnection.uri(), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        auth: MongooseConfiguration.auth,
        //reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        //reconnectInterval: 1000
    });
    console.log(`YEAH! Connected to Database @ ${MongooseConfiguration.databaseConnection.uri()}`);
};

export default ConnectToMongoDb;
