import toast from "react-hot-toast";

export const ToastMiss = (close, word) => {
  console.log(word);
  console.log(close);
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                La palabra era:
              </p>
              <p className="mt-1 text-sm text-gray-500 uppercase">{word}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              close();
              toast.dismiss(t.id);
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Iniciar nuevo juego
          </button>
        </div>
      </div>
    ),
    {
      duration: 25000,
    }
  );
};

export const ToastWon = (close) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Sublime!</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              close();
              toast.dismiss(t.id);
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Iniciar nuevo juego
          </button>
        </div>
      </div>
    ),
    {
      duration: 25000,
    }
  );
};

export const ToastDictionary = (close) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                La palabra no esta en el diccionario
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      duration: 2000,
    }
  );
};
