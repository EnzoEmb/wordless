import useGuessStore from '../store';

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
    <div className={"transition w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-solid border-2 flex place-items-center text-center justify-center uppercase text-xl rounded font-extrabold bg-white " + (classes ? classes : (letter ? 'border-gray-400 animate-input-letter' : ''))}>
      {letter}
    </div>
  );
}

export default Letter;
