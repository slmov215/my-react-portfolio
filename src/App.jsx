// import { useState } from 'react'
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
