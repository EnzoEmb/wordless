import Word from './Word';
import useGuessStore from '../store';


const Canvas = () => {

  const currentGuess = useGuessStore((state) => state.currentGuess);


  return (
    <div className="max-w-[480px] gap-1.5 flex flex-wrap justify-center mx-auto">
      <Word guess={currentGuess} />
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
    </div>
  );
}

export default Canvas;
