import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from "./components/Skills/Skills.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Skills/>
    </div>
  );
}

export default App;
