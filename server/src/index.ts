import 'module-alias/register';
import '@config/envConf';
import config from '@config/envConf';
import express, { Application } from 'express';
import connectionDB from '@config/connection';
import { parsers } from '@setupApp/parser';
import { routes } from '@setupApp/routes';

connectionDB();

const PORT: number = config.PORT;
const app: Application = express();

parsers(app);
routes(app);

const server = app.listen(PORT, (): void => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err: Error, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});