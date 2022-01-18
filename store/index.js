import create from 'zustand'

const useGuessStore = create(set => ({
  currentWord: [],
  currentGuess: [],
  wordsRepository: [],
  guessHistory: [],
  attemptNumber: 0,
  wrongLetters: [],
  addGuessLetter: (letter) => set(state => {
    letter = letter.toLowerCase();
    if (state.currentGuess.length < 5) {
      return { currentGuess: [...state.currentGuess, letter] }
    }
  }),
  removeGuessLetter: () => set(state => {
    const newGuess = state.currentGuess.slice(0, state.currentGuess.length - 1);
    return { currentGuess: newGuess }
  }),
  setupNewWord: () => set(state => {
    const newCurrentWord = state.wordsRepository[0].split('');
    return {
      attemptNumber: 0,
      guessHistory: [],
      currentGuess: [],
      wrongLetters: [],
      currentWord: newCurrentWord,
      wordsRepository: [...state.wordsRepository.slice(1)]
    }
  }),
  setupNewGuess: () => set(state => {
    // Take wrong letter from currentGuess
    let wrongLetters = [];
    state.currentGuess.forEach(letter => {
      if (!state.currentWord.includes(letter)) {
        wrongLetters.push(letter);
      }
    });
    return {
      attemptNumber: state.attemptNumber + 1,
      guessHistory: [...state.guessHistory, state.currentGuess],
      currentGuess: [],
      wrongLetters: [...state.wrongLetters, ...wrongLetters],
    }
  }),
  fetchNewWords: async () => {
    const letters = await fetch(`${window.location.href}/api/es/words/5/10`);
    const words = await letters.json();
    const newCurrentWord = words[0].split('');
    words.shift(); // Remove the first word
    set({
      wordsRepository: words,
      currentWord: newCurrentWord,
    })
  }
}))

export default useGuessStore;