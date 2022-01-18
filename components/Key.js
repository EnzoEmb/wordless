import React from 'react';
import useGuessStore from '../store';


const Key = (props) => {


  let classes;
  const wrongLetters = useGuessStore((state) => state.wrongLetters)

  let letter = props.children.toString();
  letter = letter.toLowerCase();
  if (wrongLetters.includes(letter)) {
    classes = "bg-gray-400 text-white border-gray-400"
  }


  return (
    <button onClick={props.onClick} className={"h-[50px] sm:h-auto sm:min-w-[50px] text-center rounded-lg border-solid border-2 sm:shadow-key font-bold p-2 sm:p-4 text-xs sm:text-base transition-colors grid place-items-center " + (classes ? classes : 'bg-white')}>
      {props.children}
    </button>
  );
}

export default Key;
