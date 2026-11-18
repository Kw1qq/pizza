import { createServerFn } from '@tanstack/react-start'

import { api } from '../client'

export const getPizzaOrders = createServerFn({ method: 'GET' }).handler(async () => {
  const { data } = await api.get('/pizzas/orders')
  return data
})
