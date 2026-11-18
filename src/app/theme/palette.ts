export const pizzaPalette = [
  '#fff1eb',
  '#ffe2d6',
  '#ffc7b0',
  '#ffab89',
  '#ff8b61',
  '#ff6b3d',
  '#f14e1d',
  '#d93d13',
  '#b83210',
  '#8f260d'
] as const

export const neutralPalette = [
  '#f5f5f5',
  '#f3f3f3',
  '#e7e7e7',
  '#d6d6d6',
  '#c4c4c4',
  '#b7b7b7',
  '#969696',
  '#737373',
  '#404040',
  '#0b0b0b'
] as const

export const brownPalette = [
  '#fff7ed',
  '#ffedd5',
  '#fed7aa',
  '#fdba74',
  '#fb923c',
  '#ea580c',
  '#c2410c',
  '#9a3412',
  '#7c2d12',
  '#431407'
] as const

export const pizzaColors = {
  pizza: [...pizzaPalette],
  gray: [...neutralPalette],
  brown: [...brownPalette]
} as const
