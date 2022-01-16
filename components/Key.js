import React from 'react';

const Key = (props) => {
  return (
    <button onClick={props.onClick} className="h-[50px] sm:h-auto sm:min-w-[50px] text-center rounded-lg border-solid border-2 sm:shadow-key bg-white font-bold p-2 sm:p-4 text-xs sm:text-base">
      {props.children}
    </button>
  );
}

export default Key;
