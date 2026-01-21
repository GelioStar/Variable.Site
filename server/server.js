// MODULES
const fastify = require('fastify')({ logger: true });
const path = require('node:path');

// PORT
const PORT = 3000;

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'client'),
  prefix: '/',
});

fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html');
});

fastify.register(require(path.join(__dirname, 'routes', 'shop.js')), { prefix: '/shop' });

fastify.listen({ port: PORT }, (err, address) => {
  if (err) throw err
  console.log(`Server running at ${address}`);
});