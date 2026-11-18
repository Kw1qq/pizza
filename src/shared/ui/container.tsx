import type { ContainerProps } from '@mantine/core'

import { Container as MantineContainer } from '@mantine/core'

export const Container = (props: ContainerProps) => {
  return <MantineContainer px='md' size='lg' {...props} />
}
