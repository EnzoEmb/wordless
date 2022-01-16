import Letter from './Letter';
import useGuessStore from '../store';

const Word = (props) => {
  const currentGuess = useGuessStore((state) => state.currentGuess);

  // logica para mostrar las letras que faltan
  let remainingLetters = [];
  for (let index = 0; index < (5 - (currentGuess ? currentGuess.length : 0)); index++) {
    remainingLetters.push(<Letter key={index} />);
  }

  
  if (props.currentWord) {
    return (
      <div className="flex gap-2 mx-auto border-l-4 border-green-300">
        {currentGuess?.map((letter, index) => (<Letter key={index} index={index} letter={letter} />))}
        {remainingLetters}
      </div>
    );
  } else if(props.historyWord){
    return (
      <div className="flex gap-2 mx-auto border-l-4 border-yellow-300">
        {props.historyWord?.map((letter, index) => (<Letter key={index} index={index} letter={letter} isHistory={true} />))}
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 mx-auto border-l-4 border-red-300">
        <Letter />
        <Letter />
        <Letter />
        <Letter />
        <Letter />
      </div>
    );
  }
}

export default Word;
