import Word from './Word';
import useGuessStore from '../store';
// import { useKeyPressEvent } from 'react-use';

const Canvas = () => {

  const currentGuess = useGuessStore((state) => state.currentGuess);
  const currentWord = useGuessStore((state) => state.currentWord);
  const guessedCorrectly = useGuessStore((state) => state.guessedCorrectly);



  // logica adivinar palabra
  // const currentGuess = useGuessStore(state => state.currentGuess)
  // const currentWord = useGuessStore(state => state.currentWord)

  // useKeyPressEvent('Enter', () => {
  //   if (currentGuess.join() === currentWord.join()) {
  //     const word = currentWord
  //     console.log('Adivinó');
  //   } else {
  //     const word = null
  //     console.log('No adivinó');
  //   }
  // });



  return (
    <div className="max-w-[480px] gap-1.5 flex flex-wrap justify-center mx-auto">
      <Word guess={currentGuess} />
      {/* <Word />
      <Word />
      <Word />
      <Word />
      <Word /> */}
    </div>
  );
}

export default Canvas;
