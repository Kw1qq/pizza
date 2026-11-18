import { mutationOptions } from '@tanstack/react-query'

import { calculatePizzaOrder } from './calculate-pizza-order'

export function calculatePizzaOrderMutationOptions() {
  return mutationOptions({
    mutationKey: ['pizzas', 'calculate'],
    mutationFn: (data: Parameters<typeof calculatePizzaOrder>[0]['data']) =>
      calculatePizzaOrder({ data })
  })
}
