import Letter from "./Letter";
import config from "../utils/config";
import useGuessStore from "../store";

const Word = ({ currentWord, historyWord, index }) => {
  const currentGuess = useGuessStore((state) => state.currentGuess);
  const wordIndex = index;
  if (currentWord) {
    // logica para mostrar las letras que faltan
    let remainingLetters = [];
    for (
      let index = 0;
      index < 5 - (currentGuess ? currentGuess.length : 0);
      index++
    ) {
      remainingLetters.push(<Letter key={index} />);
    }
    return (
      <div
        className={
          "flex gap-[.5vh] sm:gap-2 mx-auto " +
          (config.DEBUG ? "border-l-4 border-green-300" : "")
        }
      >
        {currentGuess?.map((letter, index) => (
          <Letter key={index} index={index} letter={letter} />
        ))}
        {remainingLetters}
      </div>
    );
  } else if (historyWord) {
    return (
      <div
        className={
          "flex gap-[.5vh] sm:gap-2 mx-auto " +
          (config.DEBUG ? "border-l-4 border-yellow-300" : "")
        }
      >
        {historyWord?.map((letter, index) => (
          <Letter
            key={index}
            index={index}
            letter={letter}
            isHistory={true}
            wordIndex={wordIndex}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div
        className={
          "flex gap-[.5vh] sm:gap-2 mx-auto " +
          (config.DEBUG ? "border-l-4 border-red-300" : "")
        }
      >
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
    );
  }
};

export default Word;
