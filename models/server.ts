import express, {Application} from 'express';
import cors from 'cors';
import pixelCopyRoute from '../routes/pixelcopy.routes';

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
        this.middlewares();
        this.routes();
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
            console.log(`Server in PORT:${this.port}`);
        })
    }
}

export default Server;