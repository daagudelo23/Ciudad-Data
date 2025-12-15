import app from './app';
import { connectDB } from './config/database';
import config from './config/env';

async function bootstrap() {
  try {
    await connectDB();
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`API CiudadData escuchando en http://localhost:${config.port}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
  }
}

bootstrap();
