import create from 'zustand'

const useGuessStore = create(set => ({
  wordsRepository: [],
  maxLetters: 5,
  guessHistory: [],
  attemptNumber: 0,
  takedGuess: false,
  guessedCorrectly: false,
  justFetched: false,
  // currentWord: ['t', 'i', 't', 'a', 'n'],
  currentWord: [],
  wrongGuessedLetters: [],
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
    if (state.currentGuess.join() === state.currentWord.join()) { // Guess is correct
      return {
        takedGuess: true,
        guessedCorrectly: true,
        justFetched: false,
      }
    } else { // Guess is wrong
      // Take wrong letter from currentGuess
      let wrongLetters = [];
      state.currentGuess.forEach(letter => {
        if (!state.currentWord.includes(letter)) {
          wrongLetters.push(letter);
        }
      });
      return {
        takedGuess: true,
        attemptNumber: state.attemptNumber + 1,
        guessHistory: [...state.guessHistory, state.currentGuess],
        currentGuess: [],
        wrongGuessedLetters: [...state.wrongGuessedLetters, ...wrongLetters],
        justFetched: false,
      }
    }
  }),
  fetchWords: async (maxLetters) => {
    const letters = await fetch(`${window.location.href}/api/es/words/${maxLetters}/10`);
    const words = await letters.json();
    const newCurrentWord = words[0].split('');
    words.shift(); // Remove the first word
    set({
      wordsRepository: words,
      currentWord: newCurrentWord,
      justFetched: true,
    })
  }
}))

export default useGuessStore;