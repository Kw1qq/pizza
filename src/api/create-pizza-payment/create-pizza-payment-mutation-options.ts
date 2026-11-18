import { mutationOptions } from '@tanstack/react-query'

import { createPizzaPayment } from './create-pizza-payment'

export function createPizzaPaymentMutationOptions() {
  return mutationOptions({
    mutationKey: ['pizzas', 'payment'],
    mutationFn: (data: Parameters<typeof createPizzaPayment>[0]['data']) =>
      createPizzaPayment({ data })
  })
}
