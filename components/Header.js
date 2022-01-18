import Dialog from "./Dialog";
import Image from 'next/image';

const iconQuestion = <Image width="23" height="23" className="w-[20px] sm:w-[23px]" src="/question.svg" alt="Acerca de..." />;
const iconStats = <Image width="23" height="23" className="w-[20px] sm:w-[23px]" src="/chart.svg" alt="Mis estadísticas" />;
const iconSettings = <Image width="23" height="23" className="w-[20px] sm:w-[23px]" src="/settings.svg" alt="Opciones" />;

const Header = () => {

  return (
    <header className="max-w-[570px] w-full mx-auto border-solid border-b flex justify-between items-center sm:pb-3 px-3 sm:px-0">
      <div className="sm:w-[130px] flex items-center">
        <Dialog icon={iconQuestion} title="Sobre Wordless">
          Adivina la palabra en 6 intentos o menos.
          <hr className="my-3" />
          Este juego es un clon de <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-500">Wordle de Josh Wardle</a>
        </Dialog>
      </div>
      <h1 className="font-[700] text-lg sm:text-3xl">WORDLESS</h1>
      <div className="sm:w-[130px] flex items-center justify-end gap-1">

        <Dialog icon={iconStats} title="Sobre Wordless">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et alias velit eum provident eos ipsam magnam earum in? Tempore modi nihil qui nobis obcaecati odit. Ea accusantium rem eos.
        </Dialog>


        <Dialog icon={iconSettings} title="Sobre Wordless">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et alias velit eum provident eos ipsam magnam earum in? Tempore modi nihil qui nobis obcaecati odit. Ea accusantium rem eos.
        </Dialog>

      </div>

    </header>
  );
}

export default Header;
