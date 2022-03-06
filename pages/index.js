import Header from "../components/Header";
import Canvas from "../components/Canvas";
import Keyboard from "../components/Keyboard";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import useGuessStore from "../store";
import useKeyPress from "../hooks/useKeyPressEventArray.js";
import confetti from "canvas-confetti";
import { ToastMiss, ToastWon, ToastDictionary } from "../components/Toasts";
import keys from "../utils/keys";

export default function Home() {
  const currentGuess = useGuessStore((state) => state.currentGuess);
  const currentWord = useGuessStore((state) => state.currentWord);
  const addGuessLetter = useGuessStore((state) => state.addGuessLetter);
  const removeGuessLetter = useGuessStore((state) => state.removeGuessLetter);
  const fetchNewWords = useGuessStore((state) => state.fetchNewWords);
  const setNewGuess = useGuessStore((state) => state.setNewGuess);
  const setNewWord = useGuessStore((state) => state.setNewWord);
  const attemptNumber = useGuessStore((state) => state.attemptNumber);
  const allowTyping = useGuessStore((state) => state.allowTyping);
  const setAllowTyping = useGuessStore((state) => state.setAllowTyping);
  const setWon = useGuessStore((state) => state.setWon);
  const wordsRepository = useGuessStore((state) => state.wordsRepository);

  function checkDictionary(guess) {
    let word = guess.join().replaceAll(",", "");
    return wordsRepository.includes(word);
  }

  // Fetch new words if empty
  if (currentWord.length === 0) {
    fetchNewWords();
  }

  // Add keypress event listener
  useKeyPress(keys, (e) => handleKeyPress(e.key));

  const handleKeyPress = (key) => {
    if (!allowTyping) return;
    // console.log("triggered guess");
    if (key === "Backspace") {
      removeGuessLetter();
    } else if (key != "Enter") {
      addGuessLetter(key);
    } else if (key === "Enter" && currentGuess.length == 5) {
      if (checkDictionary(currentGuess)) {
        handleGuess();
      } else {
        ToastDictionary();
      }
    }
  };

  const handleGuess = () => {
    // console.log("triggered guess");
    // console.log(currentGuess);
    // console.log(currentWord);
    // console.log(currentGuess.join().replaceAll(",", ""));
    let won = currentGuess.join().replaceAll(",", "") === currentWord;
    if (won) {
      setNewGuess();
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
        ToastWon(() => setNewWord());
      }, 1300);
    } else {
      setNewGuess();
      if (attemptNumber === 5) {
        setTimeout(() => {
          ToastMiss(() => setNewWord(), currentWord);
        }, 1300);
      } else {
        setTimeout(() => {
          setAllowTyping(true);
        }, 1300);
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
      className="mx-auto max-w-3xl flex flex-col justify-between pb-4 sm:pb-5"
      style={{ minHeight: "100vh", height: "calc(var(--vh) * 100)" }}
    >
      <Toaster />
      <Header />
      <Canvas />
      <Keyboard keys={keys} handleKeyPress={handleKeyPress} />
    </div>
  );
}
