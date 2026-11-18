import { queryOptions } from '@tanstack/react-query'

import { getPaidPizzaOrder } from './get-paid-pizza-order'

export function getPaidPizzaOrderQueryOptions(token: string) {
  return queryOptions({
    queryKey: ['pizzas', 'orders', 'paid', token],
    queryFn: () => getPaidPizzaOrder({ data: { token } }),
    enabled: Boolean(token)
  })
}
