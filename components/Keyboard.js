import Key from './Key.js'
import Image from 'next/image';

const iconDelete = <Image width="23" height="23" className="w-[20px] sm:w-[23px]" src="/delete-key.svg" alt="Borrar" />;

const Keyboard = ({ keys, handleKeyPress }) => {

  return (
    <div className="max-w-[320px] sm:max-w-[570px] sm:gap-1.5 gap-0.5 flex flex-wrap justify-center mx-auto">
      {keys.map((keyLetter, index) => {

        if (keyLetter === 'Backspace') {
          return <Key onClick={() => handleKeyPress(keyLetter)} key={index}>{iconDelete}</Key>
        } else if (keyLetter == 'Enter') {
          return <Key onClick={() => handleKeyPress(keyLetter)} key={index}>{keyLetter}</Key>
        }else if (keyLetter.length == 1 && keyLetter == keyLetter.toUpperCase()) {
          return <Key onClick={() => handleKeyPress(keyLetter)} key={index}>{keyLetter}</Key>
        }

      })}
    </div>
  );

}

export default Keyboard;
