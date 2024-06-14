import { useContext, useEffect, useState } from 'react';
import { DataContext } from './context/DataContext';

import { Navbar } from './navbar/Navbar';
import { About } from './about/About';
import { Projects } from './projets/Projects';
import { Contact } from './contact/Contact';
import './App.css'
import { Footer } from './footer/Footer';

{/* //TODO: no cierra menu en responsive mobil */ }

function App() {
  const { dark } = useContext(DataContext)

  return (
    <div className={`${dark}`}>

      <Navbar />
      <About />
      <Projects />
      <Contact />
      
      <Footer

      />
    </div>
  );
}


export default App
