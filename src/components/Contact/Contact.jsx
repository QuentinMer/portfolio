import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

export default function Contact() {

  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (

    <div className={`min-h-screen ${darkMode ? "bg-custom" : "bg-slate-200"}`}>
        

  <h1 className={`pt-[10%] text-5xl text-center ${darkMode ? "text-slate-200" : "text-custom"} font-pixel uppercase`}>
    Pour me contacter
  </h1>

<div className={`text-center mt-[5%] ${darkMode ? "text-slate-200" : "text-custom"}`}>

<div className='flex justify-center items-center '>

  <p className='mx-8'>
  {darkMode ? (
            <lord-icon
              src="https://cdn.lordicon.com/vcdutftw.json"
              trigger="loop"
              colors="primary:#cbd5e0,secondary:#e88c30"
              style={{
                width: "70px",
                height: "70px"
              }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/vcdutftw.json"
              trigger="loop"
              colors="primary:#140f1e,secondary:#e88c30"
              style={{
                width: "70px",
                height: "70px"
              }}
            ></lord-icon>
          )} 
          </p>
          <span className='mx-5 text-2xl font-rubik'>0492/49.28.38</span> 
</div>

<div className='flex justify-center items-center my-5'>

  <p className='mx-12'>
  {darkMode ? (
            <lord-icon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="loop"
              colors="primary:#cbd5e0,secondary:#e88c30"
              style={{
                width: "50px",
                height: "50px"
              }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="loop"
              colors="primary:#140f1e,secondary:#e88c30"
              style={{
                width: "50px",
                height: "50px"
              }}
            ></lord-icon>
          )} 
          </p>
          <span className='mx-5 text-2xl font-rubik'>Quentin Mercier</span> 
</div>
<div className='flex justify-center items-center my-5'>

  <p className='mx-8'>
  {darkMode ? (
            <lord-icon
              src="https://cdn.lordicon.com/ewswvzmw.json"
              trigger="loop"
              colors="primary:#cbd5e0,secondary:#e88c30"
              style={{
                width: "50px",
                height: "50px"
              }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/ewswvzmw.json"
              trigger="loop"
              colors="primary:#140f1e,secondary:#e88c30"
              style={{
                width: "50px",
                height: "50px"
              }}
            ></lord-icon>
          )} 
          </p>
          <span className='mx-8 text-2xl font-rubik'>doncaritos46</span> 
</div>
<div className='flex justify-center items-center my-5'>

  <p className='mx-12'>
  {darkMode ? (
            <lord-icon
              src="https://cdn.lordicon.com/ddiviogc.json"
              trigger="loop"
              colors="primary:#cbd5e0,secondary:#e88c30"
              style={{
                width: "50px",
                height: "50px"
              }}
            ></lord-icon>
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/ddiviogc.json"
              trigger="loop"
              colors="primary:#140f1e,secondary:#e88c30"
              style={{
                width: "50px",
                height: "50px"
              }}
            ></lord-icon>
          )} 
          </p>
          <span className='mx-5 text-2xl font-rubik'>Quentin Mercier </span> 
</div>
<div className='flex justify-center items-center'>

<p className='mx-5'>
{darkMode ? (
          <lord-icon
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="loop"
            colors="primary:#cbd5e0,secondary:#e88c30"
            style={{
              width: "90px",
              height: "90px"
            }}
          ></lord-icon>
        ) : (
          <lord-icon
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="loop"
            colors="primary:#140f1e,secondary:#e88c30"
            style={{
              width: "90px",
              height: "90px"
            }}
          ></lord-icon>
        )} 
        </p>
        <span className='mx-5 text-2xl font-rubik'>quentin.mercier1603@gmail.com</span> 
</div>

</div>



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
