import express from 'express';
import { routes } from './routes';
import { db } from './db';

const app = express();
app.use(express.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
})

const start = async () => {
    await db.connect('mongodb://localhost:27017');
    await app.listen(8081);
    console.log('Server is listening on Port 8081');
}

start();

