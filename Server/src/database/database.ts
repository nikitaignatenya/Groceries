import { Pool } from "pg";

const pool = new Pool({
  password: "12345678",
  database: "Groceries",
  port: 5432,
  host: "localhost",
  user: "postgres",
});

module.exports = { pool };
