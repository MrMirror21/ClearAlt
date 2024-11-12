import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Store {
  count: number
  increment: () => void
  decrement: () => void
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'my-extension-storage',
    }
  )
)