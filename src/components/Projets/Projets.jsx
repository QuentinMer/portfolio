import React, { useState } from "react";

export default function Projets() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`min-h-screen ${darkMode ? "bg-custom" : "bg-slate-200"}`}>
      <h1
        className={` text-6xl font-pixel text-center uppercase pt-[10%] ${
          darkMode ? "text-slate-200" : "text-custom"
        }`}
      >
        projets
      </h1>

      <h4
        className={` text-3xl font-rubik text-center pt-[5%] ${
          darkMode ? "text-slate-200" : "text-custom"
        }`}
      >
        Quelques projets
      </h4>

      <div
  className={`mt-[5%] ${darkMode ? "text-orange-400" : "text-orange-600"} flex flex-col items-center mx-[15%] space-y-4`}
>
        <a
          className="border rounded-md bg-orange-400 text-custom text-center text-xl p-2  w-[25%]"
          href="https://quentinmer.github.io/Simon/"
          target="blank"
        >
          Simon
        </a>

        <a
          className="border mx-[15%] rounded-md bg-orange-400 text-custom text-center text-xl p-2 w-[25%]"
          href="https://depense.vercel.app"
          target="blank"
        >
          dépenses
        </a>

        <a
          className="border rounded-md bg-orange-400 text-custom text-center text-xl p-2  w-[25%]"
          href="https://tv-show-ten.vercel.app"
          target="blank"
        >
          tv-show
        </a>
        <a
          className="border rounded-md bg-orange-400 text-custom text-center text-xl p-2  w-[25%]"
          href="https://flappy-bird-vert-mu.vercel.app/"
          target="blank"
        >
          flappy-bird
        </a>
      </div>

      <h4
        className={`fixed top-32 left-5 text-2xl ${
          darkMode ? "text-orange-400" : "text-orange-600"
        }`}
      >
        Le site est en cours de construction
      </h4>

      {/* button darkmode */}

      <button
        aria-label="darkmode"
        className="fixed bottom-[2%] right-[2%] flex flex-col items-center"
        onClick={handleDarkMode}
      >
        {darkMode ? (
          <lord-icon
            src="https://cdn.lordicon.com/dekuvifj.json"
            trigger="loop"
            colors="primary:#cbd5e0,secondary:#e88c30"
            style={{
              width: "70px",
              height: "70px",
            }}
          ></lord-icon>
        ) : (
          <lord-icon
            src="https://cdn.lordicon.com/dekuvifj.json"
            trigger="loop"
            colors="primary:#140f1e,secondary:#e88c30"
            style={{
              width: "70px",
              height: "70px",
            }}
          ></lord-icon>
        )}
        <span
          className={`font-rubik ${
            darkMode ? "text-slate-200" : "text-custom"
          }`}
        >
          {darkMode ? "Light" : "Dark"}
        </span>
      </button>
    </div>
  );
}
