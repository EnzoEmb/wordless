const Letter = (props) => {
  return (
    <div className="w-[60px] h-[60px] border-solid border-2 flex bg-white place-items-center text-center justify-center uppercase">
      {props.letter}
    </div>
  );
}

export default Letter;
