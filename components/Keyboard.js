import Key from './Key.js'
import { useKeyPressEvent } from 'react-use';
import useGuessStore from '../store';


const Keyboard = () => {

  const keys = ['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'ñ', 'Ñ', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', 'Enter', 'Backspace'];

  const addLetterToGuess = useGuessStore((state) => state.addLetterToGuess)
  const backspaceLetterFromGuess = useGuessStore((state) => state.backspaceLetterFromGuess)

  keys.forEach(key => {
    useKeyPressEvent(key, (e) => {

      if (e.key === 'Backspace') {
        backspaceLetterFromGuess();
      } else {
        addLetterToGuess(e.key);
      }
      // console.log(useGuessStore.getState().currentGuess);
      // console.log('TRIGGERED')
      // console.log(e.key)
    });
  });


  return (
    <div className="max-w-[570px] gap-1.5 flex flex-wrap justify-center mx-auto">
      <Key>Q</Key>
      <Key>W</Key>
      <Key>E</Key>
      <Key>R</Key>
      <Key>T</Key>
      <Key>Y</Key>
      <Key>U</Key>
      <Key>I</Key>
      <Key>O</Key>
      <Key>P</Key>
      <Key>A</Key>
      <Key>S</Key>
      <Key>D</Key>
      <Key>F</Key>
      <Key>G</Key>
      <Key>H</Key>
      <Key>J</Key>
      <Key>K</Key>
      <Key>L</Key>
      <Key>Ñ</Key>
      <Key>ENTER</Key>
      <Key>Z</Key>
      <Key>X</Key>
      <Key>C</Key>
      <Key>V</Key>
      <Key>B</Key>
      <Key>N</Key>
      <Key>M</Key>
      <Key><img src="back-square.svg" alt="Borrar" /></Key>

    </div>
  );
}

export default Keyboard;
