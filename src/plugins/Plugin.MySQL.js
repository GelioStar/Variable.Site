'use strict';

const fp = require('fastify-plugin');
const fastifyMySQL = require('@fastify/mysql');

module.exports = fp(async function (fastify) {
  await fastify.register(fastifyMySQL, {
    host: fastify.config.DATABASE_HOST,
    port: Number(fastify.config.DATABASE_PORT),
    user: fastify.config.DATABASE_USERNAME,
    password: fastify.config.DATABASE_PASSWORD,
    database: fastify.config.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
});