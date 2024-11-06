import React, { useState } from 'react'
import "./me.css"

export default function Me() {

    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-custom" : "bg-slate-200"}`}>
        <h1 className={`text-center text-5xl font-pixel uppercase pt-[8%] pb-[5%] ${darkMode ? "text-orange-400" : "text-orange-600"}`}>à propos de moi</h1>
      <p className={`mx-[20%] letter font-rubik text-center text-2xl ${darkMode ? "text-slate-200" : "text-custom"}`}>
      Salut ! Je suis étudiant en développement web, spécialisé en front-end, avec une passion pour la création d’interfaces modernes et dynamiques. J’adore travailler avec React, SwiftUI, et React Native pour concevoir des applications réactives et esthétiques, que ce soit pour le web ou le mobile.

Je maîtrise bien HTML et CSS, et j’ai un niveau intermédiaire en JavaScript. J’utilise également TailwindCSS et Bootstrap pour donner vie rapidement à mes idées et garantir que chaque projet soit visuellement attractif et responsive. J’ai aussi quelques bases en Angular, ce qui me permet d’explorer différentes approches pour créer des applications performantes.

Le design me tient particulièrement à cœur : pour moi, une interface doit non seulement être fonctionnelle, mais aussi agréable et intuitive pour l’utilisateur. Mon objectif ? Créer des expériences qui marient esthétique et performance.

Je suis constamment à la recherche de nouveaux outils et tendances pour affiner mes compétences et enrichir mes créations.
      </p>

      <h4 className={`fixed top-32 left-5 text-2xl ${darkMode ? "text-orange-400" : "text-orange-600"}`}>
        Le site est en cours de construction
      </h4>


      {/* button darkmode */}
      
      <button aria-label="darkmode" className="fixed bottom-[2%] right-[2%] flex flex-col items-center" onClick={handleDarkMode}> 
          {darkMode ? (
            <lord-icon
              src="https://cdn.lordicon.com/dekuvifj.json"
              trigger="loop"
              colors="primary:#cbd5e0,secondary:#e88c30"
              style={{
                width: "70px",
                height: "70px"
              }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/dekuvifj.json"
              trigger="loop"
              colors="primary:#140f1e,secondary:#e88c30"
              style={{
                width: "70px",
                height: "70px"
              }}
            ></lord-icon>
          )}
          <span className={`font-rubik ${darkMode ? "text-slate-200" : "text-custom"}`}>
            {darkMode? "Light" : "Dark"}
          </span>
        </button>
    </div>
  )
}
