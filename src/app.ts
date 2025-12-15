import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import routes from './routes';
import notFound from './middlewares/notFound.middleware';
import errorHandler from './middlewares/error.middleware';

const app = express();

// Middlewares base
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Salud
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Swagger UI leyendo docs/openapi/openapi.yaml
const swaggerPath = path.resolve(__dirname, '../docs/openapi/openapi.yaml');
const swaggerDocument = YAML.load(swaggerPath);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas de la API
app.use('/api', routes);

// Manejo de 404 y errores
app.use(notFound);
app.use(errorHandler);

export default app;
