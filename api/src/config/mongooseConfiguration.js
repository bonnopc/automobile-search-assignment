export default {
    databaseConnection: {
        protocol: 'mongodb',
        hostname: process.env.MONGO_DB_HOSTNAME || 'localhost',
        port: process.env.MONGO_DB_PORT || '27017',
        database: process.env.MONGO_DB_DATABASE || 'car-search-app',
        uri () {
            return this.protocol + '://' + this.hostname + ':' + this.port + '/' + this.database;
        }
    },
    auth: {
        user: process.env.MONGO_DB_USER || 'devops',
        password: process.env.MONGO_DB_PASSWORD || 'devops007',
        authSource: process.env.MONGO_AUTH_SOURCE || 'admin'
    },
};