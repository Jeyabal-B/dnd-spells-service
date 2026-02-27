import express from 'express';
import cors from 'cors';
import router from './routes/spellsRouter.js'

const app = express();
app.use(
    cors({
        origin: 'http://localhost:5173', //frontend codebase URL
        methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    })
);
app.use(express.json());
app.use('/', router);

export default app;