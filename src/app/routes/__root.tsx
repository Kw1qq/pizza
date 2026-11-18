import type { QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router'

import { AppThemeProvider } from '../theme/provider'

import '@mantine/core/styles.css'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Pizza — доставка пиццы' },
      { name: 'description', content: 'Свежая пицца с доставкой до двери.' }
    ]
  }),
  component: RootComponent
})

function RootComponent() {
  return (
    <RootDocument>
      <AppThemeProvider>
        <Outlet />
      </AppThemeProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='ru'>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
