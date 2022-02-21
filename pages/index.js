import Header from "../components/Header";
import Canvas from "../components/Canvas";
import Keyboard from "../components/Keyboard";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import useGuessStore from "../store";
import useKeyPress from "../hooks/useKeyPressEventArray.js";
import confetti from "canvas-confetti";

const keys = [
  "q",
  "Q",
  "w",
  "W",
  "e",
  "E",
  "r",
  "R",
  "t",
  "T",
  "y",
  "Y",
  "u",
  "U",
  "i",
  "I",
  "o",
  "O",
  "p",
  "P",
  "a",
  "A",
  "s",
  "S",
  "d",
  "D",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "j",
  "J",
  "k",
  "K",
  "l",
  "L",
  "ñ",
  "Ñ",
  "Enter",
  "z",
  "Z",
  "x",
  "X",
  "c",
  "C",
  "v",
  "V",
  "b",
  "B",
  "n",
  "N",
  "m",
  "M",
  "Backspace",
];

const notify = (word) =>
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                La palabra era:
              </p>
              <p className="mt-1 text-sm text-gray-500 uppercase">{word}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss()}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Cerrar
          </button>
        </div>
      </div>
    ),
    {
      duration: 7000,
    }
  );

export default function Home() {
  const currentGuess = useGuessStore((state) => state.currentGuess);
  const currentWord = useGuessStore((state) => state.currentWord);

  const addGuessLetter = useGuessStore((state) => state.addGuessLetter);
  const removeGuessLetter = useGuessStore((state) => state.removeGuessLetter);
  const fetchNewWords = useGuessStore((state) => state.fetchNewWords);
  const setupNewGuess = useGuessStore((state) => state.setupNewGuess);
  const setupNewWord = useGuessStore((state) => state.setupNewWord);
  const attemptNumber = useGuessStore((state) => state.attemptNumber);
  const allowTyping = useGuessStore((state) => state.allowTyping);
  const setupAllowTyping = useGuessStore((state) => state.setupAllowTyping);
  const setWon = useGuessStore((state) => state.setWon);

  // Fetch new words if empty
  if (currentWord.length === 0) {
    fetchNewWords();
  }

  // Add keypress event listener
  useKeyPress(keys, (e) => handleKeyPress(e.key));

  const handleKeyPress = (key) => {
    if (!allowTyping) return;
    console.log("triggered guess");
    if (key === "Backspace") {
      removeGuessLetter();
    } else if (key != "Enter") {
      addGuessLetter(key);
    } else if (key === "Enter" && currentGuess.length == 5) {
      handleGuess();
    }
  };

  const handleGuess = () => {
    console.log("triggered guess");
    // console.log(currentGuess.join());
    // console.log(currentWord.join(''));
    let won = currentGuess.join() === currentWord.join();
    if (won) {
      setupNewGuess();
      setTimeout(() => {
        setWon(true);
        confetti({
          particleCount: 200,
          spread: 360,
          startVelocity: 40,
          origin: {
            x: 0.5,
            y: 0.1,
          },
        });
        // setTimeout(() => {
        //   setupNewWord();
        // }, 1000);
      }, 1900);
    } else {
      setupNewGuess();
      if (attemptNumber === 5) {
        setTimeout(() => {
          notify(currentWord.join(""));
          setTimeout(() => {
            setupNewWord();
          }, 1000);
        }, 1900);
      } else {
        setTimeout(() => {
          setupAllowTyping(true);
        }, 1900);
      }
    }
  };

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <div
      className="mx-auto max-w-3xl flex flex-col justify-between py-4 sm:pb-5"
      style={{ minHeight: "calc(var(--vh) * 100)" }}
    >
      <Toaster />

      <Header />
      <Canvas />
      <Keyboard keys={keys} handleKeyPress={handleKeyPress} />
    </div>
  );
}
