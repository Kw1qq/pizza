import type { ReactNode } from 'react'

import { MantineProvider } from '@mantine/core'

import { theme } from './theme'

import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'
import '@fontsource/pixelify-sans/700.css'
import './global.css'

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
