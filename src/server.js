const fastify = require('fastify')({ logger: true });

async function start() {
  await fastify.register(require('./plugins/Plugin.Env'));
  await fastify.register(require('./plugins/Plugin.MySQL'));
  await fastify.register(require('./plugins/Plugin.Static'));

  await fastify.register(require('./routes/Route.Main'), { prefix: '/' });
  await fastify.register(require('./routes/Route.Shop'), { prefix: '/shop' });

  try {
    const address = await fastify.listen({
      port: Number(fastify.config.PORT),
      host: '0.0.0.0'
    });

    fastify.log.info(`Server running at ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();