import * as mysql from 'mysql2/promise';
import 'dotenv/config';
import { DbConfig } from './interfaces';
const configuration: DbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
export const db = mysql.createPool(configuration);
