import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { api } from '../client'
import { pizzaOrderItemsSchema } from '../calculate-pizza-order/calculate-pizza-order'

const createPizzaPaymentSchema = pizzaOrderItemsSchema.extend({
  receiverAddress: z.object({
    street: z.string().min(1),
    house: z.string().min(1),
    apartment: z.string().min(1),
    comment: z.string().optional()
  }),
  person: z.object({ phone: z.string().min(1) })
})

export const createPizzaPayment = createServerFn({ method: 'POST' })
  .validator(createPizzaPaymentSchema)
  .handler(async ({ data }) => {
    const { data: response } = await api.post('/pizzas/payment', data)
    return response
  })
