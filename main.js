import Fastify from 'fastify'
import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js'

export const makeServer = () => {
  const fastify = Fastify({
    logger: true
  })

  fastify.get('/', function (request, reply) {
    return reply.send({ hello: 'world' })
  })

  fastify.register(userRoutes, { prefix: '/users' })
  fastify.register(productRoutes, { prefix: '/products' })

  return fastify
}
