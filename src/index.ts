import express from 'express';

import { engine } from 'express-handlebars';

import { config } from 'dotenv';

import { handlebarHelpers } from './views/handlebar-helpers';
import homeRouter from './routers/home';
import { printerRouter } from './routers/printers';
import path from 'node:path';

const dotenv = config();

const app = express();
const DEFAULT_PORT: number = 3000;
// set up handlebars
// , helpers: handlebarHelpers
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));


app.use(express.static('public'));
app.use(express.urlencoded());
// routers
app.use(homeRouter);
app.use(printerRouter);
// runtime server
try {
  app.listen(process.env.PORT || DEFAULT_PORT, async () => {
    console.log(`Server starts on localhost:${process.env.PORT || DEFAULT_PORT}`);
  });
} catch {
  throw new Error('Something wrong with server');
}
