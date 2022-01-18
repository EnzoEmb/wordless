import Key from './Key.js'
import useGuessStore from '../store';
import useKeyPress from '../hooks/useKeyPressEventArray.js'
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

const Keyboard = () => {

  const keys = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'ñ', 'Ñ', 'Enter', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', 'Backspace'];

  const currentGuess = useGuessStore(state => state.currentGuess)
  const addLetterToGuess = useGuessStore((state) => state.addLetterToGuess)
  const backspaceLetterFromGuess = useGuessStore((state) => state.backspaceLetterFromGuess)
  const takeGuess = useGuessStore((state) => state.takeGuess)
  const takedGuess = useGuessStore((state) => state.takedGuess)
  const resetTakedGuess = useGuessStore((state) => state.resetTakedGuess)
  const guessedCorrectly = useGuessStore((state) => state.guessedCorrectly)
  const currentWord = useGuessStore((state) => state.currentWord)
  const fetchWords = useGuessStore((state) => state.fetchWords)
  const maxLetters = useGuessStore((state) => state.maxLetters)
  const justFetched = useGuessStore((state) => state.justFetched)


  const handleKeyPress = (keyPressed) => {
    if (takedGuess) return;
    if (keyPressed === 'Backspace') {
      backspaceLetterFromGuess();
    } else if (keyPressed != 'Enter') {
      addLetterToGuess(keyPressed);
    } else if (currentGuess.length == 5 && keyPressed === 'Enter') {
      if (currentWord.length == 0) {
        fetchWords(maxLetters);

      } else {
        takeGuess();
      }
    }
  }
  

  if (justFetched) {
    takeGuess()
  }



  useKeyPress(keys, (e) => handleKeyPress(e.key))

  // Check if the guess is correct or not
  useEffect(() => {
    console.log('guessedCorrectly', guessedCorrectly)
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


  return (
    <div className="max-w-[320px] sm:max-w-[570px] sm:gap-1.5 gap-0.5 flex flex-wrap justify-center mx-auto">
      {keys.map((keyLetter, index) => {

        if (keyLetter.length != 1) {
          if (keyLetter === 'Backspace') {
            return <Key onClick={() => { handleKeyPress(keyLetter) }} key={index} backspaceLetterFromGuess={backspaceLetterFromGuess}><img src="back-square.svg" alt="Borrar" /></Key>
          } else { // Enter
            return <Key onClick={() => { handleKeyPress(keyLetter) }} key={index}>{keyLetter}</Key>
          }
        }

        if (keyLetter.length == 1 && keyLetter == keyLetter.toUpperCase()) {
          return <Key onClick={() => { handleKeyPress(keyLetter) }} key={index}>{keyLetter}</Key>
        }

      })}
    </div>
  );

}

export default Keyboard;
