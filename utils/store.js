import { create } from 'zustand'

export const useStore = create((set) => ({
  sneakers:[],
  setSneakers: (newSneakers) => set((state) => ({
    sneakers : newSneakers
  }))
  ,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}))


