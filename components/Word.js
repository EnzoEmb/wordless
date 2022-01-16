import Letter from './Letter';

const Word = (props) => {

  // logica para mostrar las letras que faltan
  let remainingLetters = [];
  for (let index = 0; index < (5 - (props.guess ? props.guess.length : 0)); index++) {
    remainingLetters.push(<Letter key={index} />);
  }


  return (
    <div className="flex gap-2 mx-auto">
      {props.guess?.map((letter, index) => (<Letter key={index} index={index} letter={letter} />))}
      {remainingLetters}
    </div>
  );
}

export default Word;
