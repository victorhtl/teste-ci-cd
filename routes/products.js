import { z } from 'zod'

export default function productRoutes(fastify) {
  fastify.get('/', async (request, reply) => {
    return { products: [{
      id: 1,
      name: 'Product 1'
    }, {
      id: 2,
      name: 'Product 2'
    }] }
  })

  fastify.post('/', async (request, reply) => {
    const validationResult = CreateProductInput.parse(request.body)
    return { product: request.body }
  })
}

const CreateProductInput = z.object({
  name: z.string()
}).strict()