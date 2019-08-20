import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import helmet from 'helmet';

import container from './container';
import api from './api';

// Always use Singapore Timezone
process.env.TZ = 'Asia/Singapore';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const app = express();

app.set('trust proxy', true);
app.use(helmet());
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', api(container));

app.use(container.errorHandler.notFound);
app.use(container.errorHandler.generic);

http.createServer(app)
  .listen(PORT, () => {
    container.logger.info(`Server (${process.env.NODE_ENV}) running at http://${HOST}:${PORT}`);
  });
