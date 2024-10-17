import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabaseTintas {
  async listTintas() {
    const tintas = await sql`select * from tintas`;
    return tintas;
  }

  async createTintas(tinta) {
    const id = randomUUID();
    console.log('id', id);
    const marca = tinta.marca;
    const cor = tinta.cor;
    const tipo = tinta.tipo;

    await sql`insert into tintas (id, marca, cor, tipo)
    values (${id}, ${marca}, ${cor}, ${tipo})`
  }

  async updateTintas(id, tinta) {
    const marca = tinta.marca;
    const cor = tinta.cor;
    const tipo = tinta.tipo;

    await sql`update tintas set 
        marca = ${marca},
        cor = ${cor},
        tipo = ${tipo}
        where id = ${id}
    `;
  }

  async deleteTinta(id) {
    await sql`delete from tintas where id = ${id}`
  }
}
