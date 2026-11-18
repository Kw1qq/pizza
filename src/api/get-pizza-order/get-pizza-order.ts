import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { api } from '../client'

export const getPizzaOrder = createServerFn({ method: 'GET' })
  .validator(z.object({ orderId: z.string().min(1) }))
  .handler(async ({ data: { orderId } }) => {
    const { data } = await api.get(`/pizzas/orders/${encodeURIComponent(orderId)}`)
    return data
  })
