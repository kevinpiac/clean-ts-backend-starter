import express from 'express';
import routes from 'express-mount-routes';
import path from 'path';
import morganDebug from 'morgan-debug';
import bodyParser from 'body-parser';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { verifyIdToken } from './middlewares/auth';

import { response } from './middlewares';
import { log } from './utils/logger';

const app = express();
// Exposes two response methods:
// res.error(status, msg, code), res.ok(data)
app.use(response);

// Allow cors for url pattern
app.use(cors({ origin: process.env.CORS_WHITELIST, credentials: true }));

app.use(verifyIdToken);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.disable('x-powered-by');

// Log http
app.use(morganDebug(`${process.env.LOGGER_NAME}:routes:request`, 'tiny'));

// Routes
routes(app, path.join(__dirname, 'routes'), { urlPrefix: '/', logger: log('routes'), autoPlural: false });


// Catch 404 and forward to error handler
// @ts-ignore
app.use((req, res, next) => {
  next({ code: 404, expose: true, status: 'not found' });
});

// Error handler
app.use(errorHandler);


export default app;
