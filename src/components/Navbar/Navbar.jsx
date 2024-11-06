import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="bg-slate-200 sm:mt-0 border border-b-custom">
      <div className="flex justify-end">
        <div className="md:hidden m-2">
          {/* Bouton de toggle pour afficher/masquer la navbar sur sm */}
          <a href="#" onClick={toggleNavbar}>
            <lord-icon
              src="https://cdn.lordicon.com/uecgmesg.json"
              trigger="hover"
              stroke="light"
              state="hover-squeeze"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
          </a>
        </div>
      </div>

      {/* Affichage conditionnel de la navbar */}
      <nav
        className={`${
          isNavbarVisible ? "block" : "hidden"
        } md:block flex justify-center`}
      >
        <ul className="flex flex-col md:flex-row justify-between mx-[25%]">
          <li className="sm:mx-2 md:my-2 relative group">
            <Link to="/">
              <lord-icon
                src="https://cdn.lordicon.com/laqlvddb.json"
                trigger="hover"
                stroke="light"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </Link>
            <div className="absolute sm:left-20 md:left-1/2 sm:top-6 transform md:-translate-x-1/2  md:top-full m-1 hidden group-hover:block bg-orange-600 text-white text-xs py-1 px-2 rounded">
              Accueil
            </div>
          </li>
          <li className="sm:mx-2 md:my-2 relative group">
            <Link to="/me">
              <lord-icon
                src="https://cdn.lordicon.com/xzalkbkz.json"
                trigger="hover"
                stroke="light"
                state="hover-nodding"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </Link>
            <div className="absolute sm:left-20 md:left-1/2 sm:top-6 transform md:-translate-x-1/2  md:top-full m-1 hidden group-hover:block bg-orange-600 text-white text-xs py-1 px-2 text-center rounded">
              à propos
            </div>
          </li>
         
          <li className="sm:mx-2 md:my-2 relative group">
            <Link to="/projets" title="créer utilisateur">
              <lord-icon
                src="https://cdn.lordicon.com/kndkiwmf.json"
                trigger="hover"
                stroke="light"
                state="hover-roll"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </Link>
            <div className=" text-center absolute sm:left-20 md:left-1/2 sm:top-4 transform md:-translate-x-1/2  md:top-full m-1 hidden group-hover:block bg-orange-600 text-white text-xs py-1 px-2 rounded">
              projets
            </div>
          </li>
         
          <li className="sm:mx-2 md:my-2 relative group">
            <Link to="/contacts">
              <lord-icon
                src="https://cdn.lordicon.com/wzrwaorf.json"
                trigger="hover"
                stroke="light"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </Link>
            <div className="absolute sm:left-20 md:left-1/2 sm:top-6 transform md:-translate-x-1/2  md:top-full m-1 hidden group-hover:block bg-orange-600 text-white text-xs py-1 px-2 rounded">
              contact 
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
