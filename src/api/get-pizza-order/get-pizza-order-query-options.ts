import { queryOptions } from '@tanstack/react-query'

import { getPizzaOrder } from './get-pizza-order'

export function getPizzaOrderQueryOptions(orderId: string) {
  return queryOptions({
    queryKey: ['pizzas', 'orders', orderId],
    queryFn: () => getPizzaOrder({ data: { orderId } }),
    enabled: Boolean(orderId)
  })
}
