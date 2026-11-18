import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { api } from '../client'

export const pizzaCategorySchema = z.enum(['pizza', 'breakfast', 'wings', 'milkshake'])

export const getPizzaCatalog = createServerFn({ method: 'GET' })
  .validator(z.object({ category: pizzaCategorySchema.optional() }).optional())
  .handler(async ({ data }) => {
    const { data: response } = await api.get('/pizzas/catalog', {
      params: data?.category ? { category: data.category } : undefined
    })
    return response
  })
