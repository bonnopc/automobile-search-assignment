import express from 'express';
import { HttpServerConfiguration } from '../config';
import multipart from "connect-multiparty";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

import ConnectToMongoDb from './mongodbServer';
import createCar from '../repository/car/createCar';
import getCars from '../repository/car/getCars';
import getCarByUid from '../repository/car/getCarByUid';

const EXT_RE = /(\.[_\-a-zA-Z0-9]{0,16}).*/g;
const UPLOAD_DIRECTORY = "./public/uploads";

const startServer = async () => {
    try {
        if (!fs.existsSync(UPLOAD_DIRECTORY)){
            fs.mkdirSync(UPLOAD_DIRECTORY, { recursive: true });
        }
        
        const multipartMiddleware = multipart({
            uploadDir: UPLOAD_DIRECTORY,
            filename: function(filename, callback){
                const name = filename.replace(EXT_RE, "");
                callback(name+'-'+Date.now()+'.png');
            }
        });
        const app = express();
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(cors()); 
        app.use('/public/uploads', express.static('public/uploads'))
        

        // ROUTES
        app.post('/api/car/create', multipartMiddleware, createCar);
        app.get('/api/cars', getCars);
        app.get('/api/car/:uid', getCarByUid);

        // CONNECTION 
        await ConnectToMongoDb()
        
        app.listen(
            HttpServerConfiguration.PORT, 
            HttpServerConfiguration.HOST, 
            () => console.log(`Server listening on port: ${HttpServerConfiguration.PORT}`));
    } catch (err) {
        console.info(err);
    }
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

export default startServer;