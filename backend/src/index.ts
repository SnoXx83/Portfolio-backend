import "reflect-metadata";
import express, { Express, Request, Response } from 'express';
import routes from './routes/routes'
import AppDataSource from "./../config/db";
import cors from "cors";
import path from "path";

const app: Express = express();
const port = 4000;


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use('/', routes);
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));

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
