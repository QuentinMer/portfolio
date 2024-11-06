import { useEffect, useState } from "react";
import profil from "../../assets/img/donCarlitos.png";
import direction from "../../assets/icon/direction.png";
import "./home.css"
import { Link } from "react-router-dom";


export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => {
      setDarkMode(!darkMode);
    };

   
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? "bg-custom" : "bg-slate-200"}`}>
        <h3
          className={`text-3xl font-rubik mb-[2%] ${
            darkMode ? "text-orange-400" : "text-orange-600"
          }`}
        >
          Quentin Mercier
        </h3>
       
           <h1
          className={`sm:text-3xl md:text-6xl lg:text-8xl font-pixel uppercase glitch ${
            darkMode ? "text-slate-200" : "text-custom"
          }`}
          data-text="Portfolio"
        >
          Portfolio
        </h1>
        <img className="imgDirection" src={direction} alt="direction" />
        
      
       <Link className="linkProfil" to="/me">
        <img className={`imgProfil rounded-full w-[25%] cursor-pointer ${darkMode ? "border-2 border-slate-200" : " border-2 border-custom"}`} src={profil} alt="image profil" />
        </Link>
 
      
        <h3
          className={`text-3xl font-rubik mt-[2%] ${
            darkMode ? "text-orange-400" : "text-orange-600"
          }`}
        >
          Front-end développeur
        </h3>





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
