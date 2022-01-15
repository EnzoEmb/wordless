import Letter from './Letter';

const Word = (props) => {

  if (props.guess) {
    let remainingLetters = [];
    for (let index = 0; index < (5 - props.guess.length); index++) {
      remainingLetters.push(<Letter />);
    }
  }

  return (
    <div className="flex gap-2 mx-auto">
      {props.guess?.map((letter, index) => (<Letter key={index} letter={letter} />))}
      {remainingLetters}
    </div>
  );
}

export default Word;
