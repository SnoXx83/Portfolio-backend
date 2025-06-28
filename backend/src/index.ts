import "reflect-metadata";
import express, { Express, Request, Response } from 'express';
import AppDataSource from '../config/db';
import routes from './routes/routes'

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use('/', routes);

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World !');
});


const start = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connection has been established successfully');

        app.listen(port, () => {
            console.log(`The app listening on port ${port}`);
        });
    } catch (error) {
        console.log('Failed to start the application: ', error);
        process.exit(1);
    }
};



start();