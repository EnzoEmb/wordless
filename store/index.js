import create from 'zustand'

const useGuessStore = create(set => ({
  currentGuess: [],
  addLetterToGuess: (item) => set(state => ({ currentGuess: [...state.currentGuess, item] })),
}))

export default useGuessStore;