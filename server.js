
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseTintas } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabaseTintas;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/tintas', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createTintas(body);
    return reply.status(201).send();
})


// REATE
server.get('/tintas', async () => {
    const tintas = await databasePostgres.listTintas();
    return tintas;
});

// UPDATE
server.put('/tintas/:id', async (request, reply) => {
    const tintaID = request.params.id;
    const body = request.body;
    await databasePostgres.updateTinta(tintaID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/tintas/:id', async (request, reply) => {
    const tintaID = request.params.id;
    await databasePostgres.deleteTinta(tintaID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
