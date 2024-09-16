import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
      </BrowserRouter>
  );
}

export default App;
