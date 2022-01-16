import * as Dialog from '@radix-ui/react-dialog';


const DialogAbout = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="duration-200 transition-colors hover:bg-slate-100 rounded-xl grid place-items-center w-[50px] h-[50px]" title="Acerca de...">
        <img src="message-question.svg" alt="Acerca de..." />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-opacity-10 absolute bg-black w-full h-full" />
        <Dialog.Content className="max-w-[500px] w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-2xl fixed">
          <Dialog.Title className="font-bold text-xl mb-3">
            Sobre Wordless
          </Dialog.Title>
          <Dialog.Description className="font-[400] text-[15px] text-slate-500">
            Adivina la palabra en 6 intentos o menos.


            <hr className="my-3" />
            Este juego es un clon de <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-500">Wordle de Josh Wardle</a>. También puedes jugar al <a href="https://wordle.danielfrg.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-500">Wordle en español de @danielfrg</a>

          </Dialog.Description>
          <Dialog.Close className="absolute top-5 right-5 duration-200 transition-colors hover:bg-slate-100 rounded-xl grid place-items-center w-[50px] h-[50px]"><img src="close-square.svg" alt="Cerrar" /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogAbout;
