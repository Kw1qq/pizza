import { create } from 'zustand'

interface CartState {
  itemCount: number
  addItem: (quantity?: number) => void
  clear: () => void
}

export const useCartStore = create<CartState>((set) => ({
  itemCount: 0,
  addItem: (quantity = 1) => set((state) => ({ itemCount: state.itemCount + quantity })),
  clear: () => set({ itemCount: 0 })
}))
