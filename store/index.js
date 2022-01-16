import create from 'zustand'

const useGuessStore = create(set => ({
  guessHistory: [],
  attemptNumber: 0,
  takedGuess: false,
  guessedCorrectly: false,
  currentWord: ['t', 'u', 'r', 'b', 'o'],
  currentGuess: [],
  resetTakedGuess: () => set({ takedGuess: false }),
  addLetterToGuess: (letter) => set(state => {
    letter = letter.toLowerCase();
    if (state.currentGuess.length < 5) {
      return { currentGuess: [...state.currentGuess, letter] }
    }
  }),
  backspaceLetterFromGuess: () => set(state => {
    let newGuess = state.currentGuess.slice(0, state.currentGuess.length - 1);
    return { currentGuess: newGuess }
  }),
  takeGuess: () => set(state => {
    if (state.currentGuess.join() === state.currentWord.join()) {
      // console.log('Adivinó');
      return {
        takedGuess: true,
        guessedCorrectly: true,
        attemptNumber: state.attemptNumber + 1
      }
    } else {
      // console.log('No adivinó');

      return {
        takedGuess: true,
        attemptNumber: state.attemptNumber + 1,
        guessHistory: [...state.guessHistory, state.currentGuess],
        currentGuess: [],
      }
    }
  })

}))

export default useGuessStore;