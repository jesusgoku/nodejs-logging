import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', routes);

export default app;
