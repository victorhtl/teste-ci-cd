import Fastify from 'fastify'
import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js'

const fastify = Fastify({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.register(userRoutes, { prefix: '/users' })
fastify.register(productRoutes, { prefix: '/products' })

fastify.listen({ port: 3333 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
