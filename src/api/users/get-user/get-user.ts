import { z } from 'zod'

import { api } from '../../client'

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email()
})

export type User = z.infer<typeof UserSchema>

export async function getUser(userId: string): Promise<User> {
  const { data } = await api.get<unknown>(`/users/${userId}`)
  return UserSchema.parse(data)
}
