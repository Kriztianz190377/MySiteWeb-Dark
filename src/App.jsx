import { useEffect, useState } from 'react';
import EN from './assets/languages/EN.json'
import ES from './assets/languages/ES.json'
import FR from './assets/languages/FR.json'
import { Navbar } from './navbar/Navbar';
import { About } from './about/About';
import { Projects } from './projets/Projects';
import { Contact } from './contact/Contact';

import './App.css'
import { Footer } from './footer/Footer';



function App() {

  const [dark, setDark] = useState('dark')
  const [changeLanguage, setChangeLanguage] = useState("EN")
  const [objecLanguage, setObjecLanguage] = useState(EN)
  const [darkAbout, setDarkAbout] = useState(true)

  useEffect(() => {
    if (changeLanguage === 'EN') return setObjecLanguage(EN)
    if (changeLanguage === 'ES') return setObjecLanguage(ES)
    if (changeLanguage === 'FR') return setObjecLanguage(FR)
  }, [changeLanguage])


  const handleChange = () => {
    (dark === 'dark') ? setDark('light') : setDark('dark');
    setDarkAbout(!darkAbout)
  }


  return (
    <div className={`app ${dark}`}
    >
      <Navbar
        objecLanguage={objecLanguage}
        setChangeLanguage={setChangeLanguage}
        handleChange={handleChange}
        dark={dark}

      />
      <About
        objecLanguage={objecLanguage}
        darkAbout={darkAbout}
        dark={dark}

      />
      <Projects
        objecLanguage={objecLanguage} />

      <Contact
        dark={dark}
        objecLanguage={objecLanguage}
      />
      <Footer
        dark={dark}
      />
    </div>
  );
}


export default App
