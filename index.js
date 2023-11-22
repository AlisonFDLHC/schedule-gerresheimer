import express from 'express';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import router from './router/router.js';

const app = express();
const port = process.env.PORT || 3001
app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('Rodando')
});
