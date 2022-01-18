import Header from '../components/Header';
import Canvas from '../components/Canvas';
import Keyboard from '../components/Keyboard';
import { useEffect } from 'react';

import useGuessStore from '../store';
import useKeyPress from '../hooks/useKeyPressEventArray.js'
import confetti from 'canvas-confetti';

const keys = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'ñ', 'Ñ', 'Enter', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', 'Backspace'];

export default function Home() {

  const currentGuess = useGuessStore(state => state.currentGuess)
  const addGuessLetter = useGuessStore((state) => state.addGuessLetter)
  const removeGuessLetter = useGuessStore((state) => state.removeGuessLetter)
  const takeGuess = useGuessStore((state) => state.takeGuess)
  const takedGuess = useGuessStore((state) => state.takedGuess)
  const resetTakedGuess = useGuessStore((state) => state.resetTakedGuess)
  const guessedCorrectly = useGuessStore((state) => state.guessedCorrectly)
  const currentWord = useGuessStore((state) => state.currentWord)
  const fetchNewWords = useGuessStore((state) => state.fetchNewWords)

  // Fetch new words if empty
  if (currentWord.length === 0) {
    fetchNewWords();
  }

  // Add keypress event listener
  useKeyPress(keys, (e) => handleKeyPress(e.key))

  const handleKeyPress = (key) => {
    if (takedGuess) return;
    if (currentGuess.length == 5 && key === 'Enter') {
      takeGuess();
    } else if (key === 'Backspace') {
      removeGuessLetter();
    } else if (key != 'Enter') {
      addGuessLetter(key);
    }
  }

  // Check if the guess is correct or not
  useEffect(() => {
    if (guessedCorrectly) {
      setTimeout(() => {
        confetti();
      }, 800);
    } else {
      setTimeout(() => {
        resetTakedGuess();
      }, 1000);
    }
  }, [takedGuess, guessedCorrectly, resetTakedGuess])


  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className="mx-auto max-w-3xl flex flex-col justify-between py-4 sm:py-10" style={{ minHeight: 'calc(var(--vh) * 100)' }}>
      <Header />
      <Canvas />
      <Keyboard keys={keys} handleKeyPress={handleKeyPress} />
    </div>
  )
}
