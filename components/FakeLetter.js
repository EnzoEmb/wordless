const FakeLetter = ({ children, valid, nice, invalid }) => {
  return (
    <div
      className={
        "aspect-square transition w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-solid border-2 flex place-items-center text-center justify-center uppercase text-xl rounded font-extrabold bg-white " +
        (valid
          ? "animate-flip-to-green"
          : nice
          ? "animate-flip-to-yellow"
          : invalid
          ? "animate-flip-to-gray"
          : "")
      }
    >
      {children}
    </div>
  );
};

export default FakeLetter;
