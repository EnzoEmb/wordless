import Header from '../components/Header';
import Canvas from '../components/Canvas';
import Keyboard from '../components/Keyboard';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useGuessStore from '../store';
import useKeyPress from '../hooks/useKeyPressEventArray.js'
import confetti from 'canvas-confetti';

const keys = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'ñ', 'Ñ', 'Enter', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', 'Backspace'];



const notify = () => toast.custom((t) => (
  <div
    className={`${t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            Emilia Gates
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Sure! 8:30pm works great!
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
));



export default function Home() {

  const currentGuess = useGuessStore(state => state.currentGuess)
  const currentWord = useGuessStore((state) => state.currentWord)

  const addGuessLetter = useGuessStore((state) => state.addGuessLetter)
  const removeGuessLetter = useGuessStore((state) => state.removeGuessLetter)
  const fetchNewWords = useGuessStore((state) => state.fetchNewWords)
  const setupNewGuess = useGuessStore((state) => state.setupNewGuess)
  const setupNewWord = useGuessStore((state) => state.setupNewWord)

  // Fetch new words if empty
  if (currentWord.length === 0) {
    fetchNewWords();
  }

  // Add keypress event listener
  useKeyPress(keys, (e) => handleKeyPress(e.key))

  const handleKeyPress = (key) => {
    console.log('triggered guess');
    if (key === 'Backspace') {
      removeGuessLetter();
    } else if (key != 'Enter') {
      addGuessLetter(key);
    } else if (key === 'Enter' && currentGuess.length == 5) {

      notify();
      handleGuess();
    }
  }

  const handleGuess = () => {
    console.log('triggered guess');
    let won = currentGuess.join() === currentWord.join();
    if (won) {
      confetti({
        particleCount: 200,
        spread: 360,
        startVelocity: 40,
        origin: {
          x: 0.5,
          y: 0.1
        }
      });
      setupNewWord();
    } else {
      setupNewGuess();
    }
  }

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <div className="mx-auto max-w-3xl flex flex-col justify-between py-4 sm:py-10" style={{ minHeight: 'calc(var(--vh) * 100)' }}>
      <Toaster />

      <Header />
      <Canvas />
      <Keyboard keys={keys} handleKeyPress={handleKeyPress} />
    </div>
  )
}
