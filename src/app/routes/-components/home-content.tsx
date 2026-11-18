import { Button, Stack, Text, Title } from '@mantine/core'

import { Container } from '../../../shared/ui/container'

export const HomeContent = () => {
  return (
    <Container>
      <Stack align='center' gap='md' py='xl'>
        <Text aria-hidden size='48px'>
          🍕
        </Text>
        <Title order={1} ta='center'>
          Пицца уже в пути
        </Title>
        <Text c='dimmed' ta='center'>
          Начинаем собирать вкусную доставку.
        </Text>
        <Button color='pizza'>Скоро здесь будет меню</Button>
      </Stack>
    </Container>
  )
}
