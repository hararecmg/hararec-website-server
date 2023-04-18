import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || '8000';
export const TRUSTED_URLS=(process.env.TRUSTED_URLS || '').replace(/[\[\]]/g, '').split(',');
export const PERIOD_IN_MINUTES=Number(process.env.PERIOD_IN_MINUTES);
export const MAXIMUM_REQUEST_PER_PERIOD=Number(process.env.MAXIMUM_REQUEST_PERIOD);
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const JWT_SECRET = process.env.JWT_SECRET;