import Letter from './Letter';
import useGuessStore from '../store';
import config from '../utils/config';

const Word = (props) => {


  const currentGuess = useGuessStore((state) => state.currentGuess);

  if (props.currentWord) {
    // logica para mostrar las letras que faltan
    let remainingLetters = [];
    for (let index = 0; index < (5 - (currentGuess ? currentGuess.length : 0)); index++) {
      remainingLetters.push(<Letter key={index} />);
    }
    return (
      <div className={"flex gap-2 mx-auto " + (config.DEBUG ? 'border-l-4 border-green-300' : '')}>
        {currentGuess?.map((letter, index) => (<Letter key={index} index={index} letter={letter} />))}
        {remainingLetters}
      </div>
    );
  } else if (props.historyWord) {
    return (
      <div className={"flex gap-2 mx-auto " + (config.DEBUG ? 'border-l-4 border-yellow-300' : '')}>
        {props.historyWord?.map((letter, index) => (<Letter key={index} index={index} letter={letter} isHistory={true} />))}
      </div>
    );
  } else {
    return (
      <div className={"flex gap-2 mx-auto " + (config.DEBUG ? 'border-l-4 border-red-300' : '')}>
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
