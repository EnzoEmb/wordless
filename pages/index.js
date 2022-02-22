import Header from "../components/Header";
import Canvas from "../components/Canvas";
import Keyboard from "../components/Keyboard";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import useGuessStore from "../store";
import useKeyPress from "../hooks/useKeyPressEventArray.js";
import confetti from "canvas-confetti";
import { ToastMiss, ToastWon } from "../components/Toasts";
import keys from "../utils/keys";

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
    // console.log("triggered guess");
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
        ToastWon(() => setupNewWord());
      }, 1900);
    } else {
      setupNewGuess();
      if (attemptNumber === 5) {
        setTimeout(() => {
          ToastMiss(currentWord.join(""));
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
      style={{ minHeight: "100vh", Height: "calc(var(--vh) * 100)" }}
    >
      <Toaster />
      <Header />
      <Canvas />
      <Keyboard keys={keys} handleKeyPress={handleKeyPress} />
    </div>
  );
}
