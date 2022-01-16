import { useEffect } from 'react';
import useGuessStore from '../store';

const Letter = (props) => {

  let classes;
  const currentWord = useGuessStore((state) => state.currentWord);
  const takedGuess = useGuessStore((state) => state.takedGuess);
  const resetTakedGuess = useGuessStore((state) => state.resetTakedGuess)
  let guessLetter = currentWord[props.index];

  if (takedGuess || props.isHistory) {
    if (props.letter) {
      if (guessLetter === props.letter) {
        classes = "animate-flip-to-green bg-green-500 border-green-500 text-white";
      } else if (currentWord.includes(props.letter)) {
        classes = "animate-flip-to-yellow bg-yellow-400 border-yellow-400 text-white";
      } else if (guessLetter != props.letter) {
        classes = "animate-flip-to-gray bg-gray-400 border-gray-400 text-white";
      }
    }
  }

  return (
    <div className={"w-[60px] h-[60px] border-solid border-2 flex place-items-center text-center justify-center uppercase text-xl font-bold bg-white " + (classes ? classes : '')}>
      {props.letter}
    </div>
  );
}

export default Letter;
