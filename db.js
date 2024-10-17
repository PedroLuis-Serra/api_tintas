import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGTINTAS, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGTINTAS,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };