import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from './logger';
import initializePassport from './passport';
import router from './router';

const port = 3001;
const app = express();

// universal setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);

// authentication configuration
initializePassport(app);

// routes
app.use('', router);

app.listen(port, () => console.log(`Express server listening on port ${port}!`))
