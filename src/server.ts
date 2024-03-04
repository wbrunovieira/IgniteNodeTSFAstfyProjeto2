import fastify from 'fastify';
import crypto from 'node:crypto';
import { knex } from '../database';

const app = fastify();

app.get('/hello', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Salary',
    amount: 1000,
  });
  return transactions;
});

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server is running on port 3000');
  });
