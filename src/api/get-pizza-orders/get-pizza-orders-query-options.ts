import { queryOptions } from '@tanstack/react-query'

import { getPizzaOrders } from './get-pizza-orders'

export function getPizzaOrdersQueryOptions() {
  return queryOptions({ queryKey: ['pizzas', 'orders'], queryFn: () => getPizzaOrders() })
}
