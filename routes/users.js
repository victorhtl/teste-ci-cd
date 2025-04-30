import { z } from 'zod'

export default function userRoutes(fastify) {
  fastify.get('/', async (request, reply) => {
    return { users: [{
      id: 1,
      name: 'John Doe'
    }, {
      id: 2,
      name: 'Jane Doe'
    }] }
  })

  fastify.post('/', async (request, reply) => {
    const validationResult = CreateUserInput.parse(request.body)

    if(!validationResult.success) {
      return reply.status(400).send({ error: validationResult.error })
    }

    return reply.status(200).send({ user: request.body })
  })
}

const CreateUserInput = z.object({
  name: z.string()
}).strict()