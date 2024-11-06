import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projets/Projets";
import Contact from "./components/Contact/Contact";
import Me from "./components/Me/Me";


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/me" element={<Me/>} />
      </Routes>
    </Router>
  );
}

export default App;
