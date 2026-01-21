module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return reply.sendFile('pages/shop/index.html');
  });

  // можно добавить другие роуты внутри /web1
//   fastify.get('/data', async (request, reply) => {
//     return { msg: 'data for web1' };
//   });
};