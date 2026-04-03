'use strict';

const ShopController = require('../controllers/Controller.Shop');

module.exports = async function (fastify) {
  fastify.get('/', async (request, reply) => {
    const page = await ShopController.getPage();
    return reply.sendFile(page);
  });
};