import 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { router } from './routes';

const port = 3000

const app = express();

app.use(express.json());

app.use(router);

app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

