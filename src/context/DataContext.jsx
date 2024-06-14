import {createContext, useEffect, useRef, useState } from "react";

import EN from '../assets/languages/EN.json'
import ES from '../assets/languages/ES.json'
import FR from '../assets/languages/FR.json'

export const DataContext = createContext();
export const DataProvider = ({children}) => {

    const [dark, setDark] = useState('bg-bgDark text-textColorLight')
    const [changeLanguage, setChangeLanguage] = useState("EN")
    const [objecLanguage, setObjecLanguage] = useState(EN)
    const [darkAbout, setDarkAbout] = useState(true)
    const [nav, setNav] = useState(false);
    useEffect(() => {
        if (changeLanguage === 'EN') return setObjecLanguage(EN)
        if (changeLanguage === 'ES') return setObjecLanguage(ES)
        if (changeLanguage === 'FR') return setObjecLanguage(FR)
      }, [changeLanguage])
        
      const handleChange = () => {
        if (darkAbout) {
          setDark('bg-bgLight text-textColorDark')    
        } else {
          setDark('bg-bgDark text-textColorLight')
        }    
        setDarkAbout(!darkAbout)
      }


    return (
        <DataContext.Provider
            value={{
                dark, setDark,
                changeLanguage, setChangeLanguage,
                objecLanguage, setObjecLanguage,
                darkAbout, setDarkAbout,
                handleChange,
                nav, setNav,
         
            }}
        >
            {children}
        </DataContext.Provider>

    )
};

