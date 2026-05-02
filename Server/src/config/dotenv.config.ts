import { config } from 'dotenv';

config();

export const { PORT, JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, SMTP_HOST, SMTP_PORT } = process.env;
