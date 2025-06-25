import "reflect-metadata";
import express, { Express, Request, Response } from 'express';
import AppDataSource from '../config/db';

const app: Express = express();
const port = 3000;

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

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World !');
});


start();