import { makeServer } from "./main.js"

const fastify = makeServer()

fastify.listen({ port: 3333 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log('Running on http://localhost:3333')
})
