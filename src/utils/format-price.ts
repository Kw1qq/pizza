const rubles = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0
})

export function formatPrice(amount: number): string {
  return rubles.format(amount)
}
