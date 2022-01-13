import React from 'react';

const Key = (props) => {
  return (
    <button className="min-w-[50px] text-center p-4 rounded-lg border-solid border-2 shadow-key bg-white font-bold">
      {props.children}
    </button>
  );
}

export default Key;
