const fastify = require('fastify')({ logger: true });
const PORT = 3000;

fastify.get('/world', async (request, reply) => {
  return { out: 'world' };
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT })
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();