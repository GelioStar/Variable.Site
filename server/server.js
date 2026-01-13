
// MODULES
const fastify = require('fastify')({ logger: true })
const path = require('node:path')
const mysql = require('mysql')

// PORT

// регистрируем плагин @fastify/static
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'client'), // папка с HTML/CSS/JS
  prefix: '/',                          // URL-префикс (от корня)
});

// по умолчанию Fastify отдаёт index.html в корне
fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html')   // отдаёт файл из public/
});

// запускаем сервер
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server running at ${address}`)
});