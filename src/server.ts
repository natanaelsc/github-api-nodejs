import express from 'express';
import morgan from 'morgan';
import 'dotenv';

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    console.log(`Press CTRL + C to stop`)
})

