import { sql } from './db.js'

sql`
  CREATE TABLE tintas (
      id text PRIMARY KEY,
      marca character varying(255),
      cor character varying(255),
      tipo character varying(255)
  );
`.then(() => {
  console.log('Tabela foi criada!');
})