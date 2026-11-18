import { queryOptions } from '@tanstack/react-query'
import { z } from 'zod'

import { pizzaCategorySchema } from './get-pizza-catalog'
import { getPizzaCatalog } from './get-pizza-catalog'

export function getPizzaCatalogQueryOptions(category?: z.infer<typeof pizzaCategorySchema>) {
  return queryOptions({
    queryKey: ['pizzas', 'catalog', category],
    queryFn: () => getPizzaCatalog({ data: { category } })
  })
}
