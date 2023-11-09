import express, {Application} from 'express';
import cors from 'cors';
import pixelCopyRoute from '../routes/pixelcopy.routes';
import db from '../db/connection';

class Server{
    private app:Application;
    private port:string;
    private apiPath = {
        pixelcopy: '/api/pixelcopy'
    }



    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';

        // Initial METHODS
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online...'.bgGreen.white);
        } catch (error) {
            console.log(error);
        }
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        this.app.use( this.apiPath.pixelcopy, pixelCopyRoute );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server in PORT:${this.port}`.green);
        })
    }
}

export default Server;