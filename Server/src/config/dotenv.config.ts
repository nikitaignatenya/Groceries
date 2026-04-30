import { config } from 'dotenv';

config();

export const { PORT, JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;
