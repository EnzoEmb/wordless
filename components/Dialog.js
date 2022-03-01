import * as Modal from "@radix-ui/react-dialog";
import Image from "next/image";

const Dialog = ({ icon, title, children, initialOpen }) => {
  return (
    <Modal.Root defaultOpen={initialOpen}>
      <Modal.Trigger className="duration-200 transition hover:bg-slate-100 rounded-xl grid place-items-center w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] focus:ring-2 focus:ring-indigo-500 hover:ring-2 hover:ring-indigo-500 focus:outline-none">
        {icon}
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay className="animate-fade-in inset-0 bg-opacity-10 absolute bg-black w-full h-full" />
        <div className="animate-dialog-in origin-center fixed inset-0">
          <Modal.Content className="max-h-[90%] overflow-auto max-w-[95%] sm:max-w-[500px] w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-2xl fixed">
            <Modal.Title className="font-bold text-xl mb-3">
              {title}
            </Modal.Title>
            <div className="font-[400] text-[15px] text-slate-500">
              {children}
            </div>
            <Modal.Close className="absolute top-5 right-5 duration-200 transition-colors hover:bg-slate-100 rounded-xl grid place-items-center w-[50px] h-[50px]">
              <Image width="15" height="15" src="/close.svg" alt="Cerrar" />
            </Modal.Close>
          </Modal.Content>
        </div>
      </Modal.Portal>
    </Modal.Root>
  );
};

export default Dialog;
