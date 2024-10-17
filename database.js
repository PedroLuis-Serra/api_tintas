import { sql } from './db.js';

export class DatabaseTintas {
    async createTintas(tintas) {
        const id = tinta.id();
        const marca = tinta.marca;
        const cor = tinta.cor;
        const tipo = tinta.tipo;

        await sql`insert into tintas (id, marca, cor, tipo)
        values (${id}, ${marca}, ${cor}, ${tipo}`
    }

    async listTintas() {

    }
  
    async updateTintas(id, tinta) {
       
    }
  
    async deleteTintas(id) {
       
    }
}