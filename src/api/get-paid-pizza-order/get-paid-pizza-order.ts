import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { api } from '../client'

export const getPaidPizzaOrder = createServerFn({ method: 'GET' })
  .validator(z.object({ token: z.string().min(1) }))
  .handler(async ({ data: { token } }) => {
    const { data } = await api.get('/pizzas/orders/paid', { params: { token } })
    return data
  })
