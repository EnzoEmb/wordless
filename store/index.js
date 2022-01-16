import create from 'zustand'

const useGuessStore = create(set => ({
  guessHistory: [],
  attemptNumber: 0,
  takedGuess: false,
  guessedCorrectly: false,
  currentWord: ['t', 'u', 'r', 'b', 'o'],
  wrongGuessedLetters: [],
  currentGuess: [],
  resetTakedGuess: () => set({ takedGuess: false }),
  // addWrongLetter: (letter) => set((state) => {
  //   return { wrongGuessedLetters: [...state.wrongGuessedLetters, letter] };
  // }),
  addLetterToGuess: (letter) => set(state => {
    letter = letter.toLowerCase();
    // if (state.currentWord.includes(letter)) {
    //   return { wrongGuessedLetters: [...state.wrongGuessedLetters, letter] };
    // }
    if (state.currentGuess.length < 5) {
      return { currentGuess: [...state.currentGuess, letter] }
    }
  }),
  backspaceLetterFromGuess: () => set(state => {
    let newGuess = state.currentGuess.slice(0, state.currentGuess.length - 1);
    return { currentGuess: newGuess }
  }),
  takeGuess: () => set(state => {
    if (state.currentGuess.join() === state.currentWord.join()) { // Guess is correct
      return {
        takedGuess: true,
        guessedCorrectly: true,
        attemptNumber: state.attemptNumber + 1
      }
    } else { // Guess is wrong

      // console.log(state.wrongGuessedLetters);

      let wrongLetters = [];
      state.currentGuess.forEach(letter => {
        if (!state.currentWord.includes(letter)) {
          wrongLetters.push(letter);
        }
      });
      // remove duplicate values
      // wrongLetters = [...new Set(wrongLetters)];
      // console.log(wrongLetters);

      return {
        takedGuess: true,
        attemptNumber: state.attemptNumber + 1,
        guessHistory: [...state.guessHistory, state.currentGuess],
        currentGuess: [],
        wrongGuessedLetters: [...state.wrongGuessedLetters, ...wrongLetters]
      }
    }
  })

}))

export default useGuessStore;