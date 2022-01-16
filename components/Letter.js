import useGuessStore from '../store';



const Letter = (props) => {

  const currentWord = useGuessStore((state) => state.currentWord);
  const takedGuess = useGuessStore((state) => state.takedGuess);

  let classes = "";
  if (takedGuess) {
    let guessLetter = currentWord[props.index];
    if (guessLetter === props.letter) {
      classes = "bg-green-500 border-green-500 text-white";
    }else if(currentWord.includes(props.letter)){
      classes = "bg-yellow-400 border-yellow-400 text-white";
    }else if(guessLetter != props.letter){
      classes = "bg-gray-400 border-gray-400 text-white";
    }
  }

  return (
    <div className={"w-[60px] h-[60px] border-solid border-2 flex place-items-center text-center justify-center uppercase text-xl font-bold " + (classes)}>
      {props.letter}
    </div>
  );
}

export default Letter;
