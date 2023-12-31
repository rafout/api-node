import "reflect-metadata";
import express from 'express';
import './database/ormconfig';
import { routes } from "./services/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log('Server is running!'));