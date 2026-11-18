import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { api } from '../client'

export const cancelPizzaOrder = createServerFn({ method: 'POST' })
  .validator(z.object({ orderId: z.string().min(1) }))
  .handler(async ({ data: { orderId } }) => {
    const { data } = await api.patch(`/pizzas/orders/${encodeURIComponent(orderId)}/cancel`)
    return data
  })
