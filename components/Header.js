import Dialog from "./Dialog";
import Image from "next/image";
import FakeLetter from "./FakeLetter";
import { useEffect, useState } from "react";

const iconQuestion = (
  <Image
    width="23"
    height="23"
    className="w-[20px] sm:w-[23px]"
    src="/question.svg"
    alt="Acerca de..."
  />
);
const iconStats = (
  <Image
    width="23"
    height="23"
    className="w-[20px] sm:w-[23px]"
    src="/chart.svg"
    alt="Mis estadísticas"
  />
);
const iconSettings = (
  <Image
    width="23"
    height="23"
    className="w-[20px] sm:w-[23px]"
    src="/settings.svg"
    alt="Opciones"
  />
);

const Header = () => {
  return (
    <header className="max-w-[570px] w-full mx-auto border-solid border-b border-[#f1e1cf] flex justify-between items-center sm:pb-3 px-3 sm:px-0">
      <div className="sm:w-[130px] flex items-center">
        <Dialog icon={iconQuestion} title="Como jugar">
          <p className="mb-3">Adivina la palabra en 6 intentos o menos.</p>
          <p className="mb-3">
            Cada intento debe ser una palabra válida de 5 letras.
          </p>
          <p>
            Luego de cada intento, el color de los cuadros cambiarán para
            mostrar que tan cerca estás de acertar la palabra.
          </p>
          <hr className="my-3" />
          <strong className="mb-2 block">Ejemplos:</strong>

          <div className="flex gap-1 mt-3 mb-1">
            <FakeLetter>a</FakeLetter>
            <FakeLetter valid>s</FakeLetter>
            <FakeLetter>a</FakeLetter>
            <FakeLetter>d</FakeLetter>
            <FakeLetter>o</FakeLetter>
          </div>
          <p className="block">
            La letra S esta en la palabra y en la posición correcta
          </p>

          <div className="flex gap-1 mt-3 mb-1">
            <FakeLetter>c</FakeLetter>
            <FakeLetter>e</FakeLetter>
            <FakeLetter>b</FakeLetter>
            <FakeLetter>a</FakeLetter>
            <FakeLetter nice>r</FakeLetter>
          </div>
          <p className="block">
            La letra R esta en la palabra, pero en la posición incorrecta
          </p>

          <div className="flex gap-1 mt-3 mb-1">
            <FakeLetter>l</FakeLetter>
            <FakeLetter>e</FakeLetter>
            <FakeLetter invalid>m</FakeLetter>
            <FakeLetter>u</FakeLetter>
            <FakeLetter>r</FakeLetter>
          </div>
          <p className="block">La letra M no se encuentra en la palabra</p>

          <hr className="my-3" />
          <p>
            Este juego es un clon de{" "}
            <a
              href="https://www.powerlanguage.co.uk/wordle/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-500"
            >
              Wordle de Josh Wardle
            </a>
          </p>
        </Dialog>
      </div>
      <h1 className="font-[700] text-lg sm:text-3xl">WORDLESS</h1>
      <div className="sm:w-[130px] flex items-center justify-end gap-1">
        <Dialog icon={iconStats} title="Estadísticas">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et
          alias velit eum provident eos ipsam magnam earum in? Tempore modi
          nihil qui nobis obcaecati odit. Ea accusantium rem eos.
        </Dialog>

        <Dialog icon={iconSettings} title="Opciones">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et
          alias velit eum provident eos ipsam magnam earum in? Tempore modi
          nihil qui nobis obcaecati odit. Ea accusantium rem eos.
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
