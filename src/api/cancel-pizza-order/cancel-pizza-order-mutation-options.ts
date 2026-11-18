import { mutationOptions } from '@tanstack/react-query'

import { cancelPizzaOrder } from './cancel-pizza-order'

export function cancelPizzaOrderMutationOptions() {
  return mutationOptions({
    mutationKey: ['pizzas', 'orders', 'cancel'],
    mutationFn: (orderId: string) => cancelPizzaOrder({ data: { orderId } })
  })
}
