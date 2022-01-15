import create from 'zustand'

const useGuessStore = create(set => ({
  currentGuess: [],
  // addLetterToGuess: (letter) => set(state => ({ currentGuess: [...state.currentGuess, letter] })),
  // addLetterToGuess: (letter) => {
  //   letter = letter.toLowerCase();
  //   set(state => ({ currentGuess: [...state.currentGuess, letter] }));
  // },
  addLetterToGuess: (letter) => set(state => {
    letter = letter.toLowerCase();
    if (state.currentGuess.length < 5) {
      return { currentGuess: [...state.currentGuess, letter] }
    }
  }),
  backspaceLetterFromGuess: () => set(state => {
    let newGuess = state.currentGuess.slice(0, state.currentGuess.length - 1);
    return {
      currentGuess: newGuess
    }
  }),


}))

export default useGuessStore;