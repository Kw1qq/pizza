import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { api } from '../client'
import { pizzaCategorySchema } from '../get-pizza-catalog/get-pizza-catalog'

export const pizzaOrderItemsSchema = z.object({
  items: z
    .array(
      z.object({
        _id: z.string(),
        category: pizzaCategorySchema,
        quantity: z.number().positive(),
        size: z.enum(['small', 'medium', 'large']).optional(),
        option: z.string().optional(),
        toppings: z.array(z.string()).optional()
      })
    )
    .min(1)
})

export const calculatePizzaOrder = createServerFn({ method: 'POST' })
  .validator(pizzaOrderItemsSchema)
  .handler(async ({ data }) => {
    const { data: response } = await api.post('/pizzas/calculate', data)
    return response
  })
