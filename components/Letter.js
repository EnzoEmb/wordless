import useGuessStore from '../store';

const Letter = (props) => {

  let classes;
  const currentWord = useGuessStore((state) => state.currentWord);
  const currentGuess = useGuessStore((state) => state.currentGuess);
  const isGuess = currentGuess.length == 0;
  const guessLetter = currentWord[props.index];

  if (props.letter) {
    if (isGuess || props.isHistory) {
      if (guessLetter === props.letter) {
        classes = "animate-flip-to-green";
      } else if (currentWord.includes(props.letter)) {
        classes = "animate-flip-to-yellow";
      } else if (guessLetter != props.letter) {
        // addWrongLetter(props.letter);
        classes = "animate-flip-to-gray";
      }
    }
  }

  return (
    <div className={"w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-solid border-2 flex place-items-center text-center justify-center uppercase text-xl font-extrabold bg-white " + (classes ? classes : '')}>
      {props.letter}
    </div>
  );
}

export default Letter;
