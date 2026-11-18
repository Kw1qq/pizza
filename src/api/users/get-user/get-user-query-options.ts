import { queryOptions } from '@tanstack/react-query'

import { getUser } from './get-user'

export function getUserQueryOptions(userId: string) {
  return queryOptions({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId)
  })
}
