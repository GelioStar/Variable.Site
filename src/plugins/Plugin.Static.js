'use strict';

const fp = require('fastify-plugin');
const fastifyStatic = require('@fastify/static');
const path = require('node:path');

module.exports = fp(async function (fastify) {
  await fastify.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'client'),
    prefix: '/',
  });
});