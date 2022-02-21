import create from "zustand";
import { devtools } from "zustand/middleware";

const useGuessStore = create(
  devtools((set, get) => ({
    currentWord: [],
    currentGuess: [],
    wordsRepository: [],
    guessHistory: [],
    attemptNumber: 0,
    wrongLetters: [],
    allowTyping: true,
    hasWon: false,
    setWon: (value) => set(() => ({ hasWon: value })),
    addGuessLetter: (letter) =>
      set((state) => {
        letter = letter.toLowerCase();
        if (state.currentGuess.length < 5) {
          return { currentGuess: [...state.currentGuess, letter] };
        }
      }),
    removeGuessLetter: () =>
      set((state) => {
        const newGuess = state.currentGuess.slice(
          0,
          state.currentGuess.length - 1
        );
        return { currentGuess: newGuess };
      }),
    setupNewWord: () => {
      if (get().wordsRepository.length === 0) {
        get().fetchNewWords();
      } else {
        set((state) => {
          const newCurrentWord = state.wordsRepository[0].split("");
          return {
            attemptNumber: 0,
            guessHistory: [],
            currentGuess: [],
            wrongLetters: [],
            currentWord: newCurrentWord,
            wordsRepository: [...state.wordsRepository.slice(1)],
            allowTyping: true,
            hasWon: false,
          };
        });
      }
    },
    setupNewGuess: () =>
      set((state) => {
        // Take wrong letter from currentGuess
        let wrongLetters = [];
        state.currentGuess.forEach((letter) => {
          if (!state.currentWord.includes(letter)) {
            wrongLetters.push(letter);
          }
        });
        return {
          attemptNumber: state.attemptNumber + 1,
          guessHistory: [...state.guessHistory, state.currentGuess],
          currentGuess: [],
          wrongLetters: [...state.wrongLetters, ...wrongLetters],
          allowTyping: false,
        };
      }),
    fetchNewWords: async () => {
      const letters = await fetch(`${window.location.href}/api/es/words/5/10`);
      const words = await letters.json();
      words.shift(); // Remove the first word

      set({
        wordsRepository: words,
      });
      get().setupNewWord();
    },
    setupAllowTyping: () => set((state) => ({ allowTyping: true })),
  }))
);

export default useGuessStore;
