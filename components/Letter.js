import useGuessStore from "../store";

const Letter = ({ letter, isHistory, index }) => {
  let classes;
  const currentWord = useGuessStore((state) => state.currentWord);
  const currentGuess = useGuessStore((state) => state.currentGuess);
  const isGuess = currentGuess.length == 0;
  const guessLetter = currentWord[index];

  if (letter) {
    if (isGuess || isHistory) {
      if (guessLetter === letter) {
        classes = "animate-flip-to-green";
      } else if (currentWord.includes(letter)) {
        classes = "animate-flip-to-yellow";
      } else if (guessLetter != letter) {
        classes = "animate-flip-to-gray";
      }
    }
  }
  return (
    <div
      className={
        "transition w-[9vh] h-[9vh]  md:w-[6vh] md:h-[6vh] md:max-w-[60px] md:max-h-[60px] border-solid border-2 flex place-items-center text-center justify-center uppercase text-xl rounded font-extrabold bg-white " +
        (classes
          ? classes
          : letter
          ? "border-gray-400 animate-input-letter"
          : "")
      }
      style={classes ? { animationDelay: index * 300 + "ms" } : {}}
    >
      {letter}
    </div>
  );
};

export default Letter;
