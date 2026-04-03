'use strict';

const fp = require('fastify-plugin');
const fastifyEnv = require('@fastify/env');

const schema = {
  type: 'object',
  required: ['PORT', 'DATABASE_HOST', 'DATABASE_USERNAME', 'DATABASE_PASSWORD', 'DATABASE_NAME'],
  properties: {
    PORT: {
      type: 'string',
      default: '3000'
    },
    DATABASE_HOST: {
      type: 'string',
      default: 'localhost'
    },
    DATABASE_PORT: {
      type: 'string',
      default: '3306'
    },
    DATABASE_USERNAME: {
      type: 'string',
      default: 'root'
    },
    DATABASE_PASSWORD: {
      type: 'string'
    },
    DATABASE_NAME: {
      type: 'string',
      default: 'site'
    }
  }
};

module.exports = fp(async function (fastify) {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema,
    dotenv: true
  });
});