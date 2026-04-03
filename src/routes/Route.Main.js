'use strict';

const MainController = require('../controllers/Controller.Main');

module.exports = async function (fastify) {
  fastify.get('/', async (request, reply) => {
    const page = await MainController.getPage();
    return reply.sendFile(page);
  });
};