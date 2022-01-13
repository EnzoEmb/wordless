import DialogAbout from "./DialogAbout";

const Header = () => {
  return (
    <header className="max-w-[570px] w-full mx-auto border-solid border-b flex justify-between items-center pb-3">
      <div className="w-[130px] flex items-center">
      <DialogAbout />

      </div>
      <h1 className="font-[700] text-3xl">WORDLESS</h1>
      <div className="w-[130px] flex items-center justify-end gap-1">
        <button className="duration-200 transition-colors hover:bg-slate-100 rounded-xl grid place-items-center w-[50px] h-[50px]" title="Mis estadísticas"><img src="chart-2.svg" alt="Mis estadísticas" /></button>
        <button className="duration-200 transition-colors hover:bg-slate-100 rounded-xl grid place-items-center w-[50px] h-[50px]" title="Configuración"><img src="setting-2.svg" alt="Configuración" /></button>
      </div>

    </header>
  );
}

export default Header;
