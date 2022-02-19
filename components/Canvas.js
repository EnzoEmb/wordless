import Word from "./Word";
import config from "../utils/config";
import useGuessStore from "../store";

const Canvas = () => {
  const attemptNumber = useGuessStore((state) => state.attemptNumber);
  const guessHistory = useGuessStore((state) => state.guessHistory);

  let words = [];
  for (let index = 0; index < config.MAX_ATTEMPTS; index++) {
    words.push(
      <Word
        key={index}
        currentWord={attemptNumber == index ? true : false}
        historyWord={guessHistory[index]}
      />
    );
  }

  return (
    <div className="my-3 flex-grow max-w-[480px] gap-[.5vh] sm:gap-1.5 flex flex-wrap justify-center mx-auto flex-col">
      {words}
    </div>
  );
};

export default Canvas;
