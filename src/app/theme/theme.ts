import { createTheme, rem } from '@mantine/core'

import { components } from './components'
import { pizzaColors } from './palette'

export { pizzaPalette } from './palette'

export const theme = createTheme({
  primaryColor: 'pizza',
  colors: pizzaColors,
  fontFamily: 'Nunito, system-ui, sans-serif',
  headings: {
    fontFamily: 'Nunito, system-ui, sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(32), lineHeight: '1.25' },
      h2: { fontSize: rem(24), lineHeight: '1.33' },
      h3: { fontSize: rem(20), lineHeight: '1.4' },
      h4: { fontSize: rem(18), lineHeight: '1.44' },
      h5: { fontSize: rem(16), lineHeight: '1.5' },
      h6: { fontSize: rem(14), lineHeight: '1.57' }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(24)
  },
  lineHeights: {
    xs: '1.33',
    sm: '1.57',
    md: '1.5',
    lg: '1.44',
    xl: '1.33'
  },
  primaryShade: 6,
  defaultRadius: 'md',
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32)
  },
  other: {
    colors: {
      background: '#fbfbfb',
      text: '#0b0b0b',
      muted: '#969696',
      placeholder: '#b7b7b7',
      surface: '#f5f5f5',
      warmSurface: '#fff7ed',
      brown: '#7c2d12',
      logoFontFamily: 'Pixelify Sans, monospace'
    }
  },
  components
})
