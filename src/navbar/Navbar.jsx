import { useState } from "react";
import NavbarDesktop from "./navbarDesktop/NavbarDesktop";
import NavbarMobil from "./navbarMobil/NavbarMobil";
import SocialIcons from "./socialIcons/SocialIcons";

import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import { Languages } from "./changes-languages/Languages";
import ButtonTheme from "./buttonTheme/ButtonTheme";

import LG from  "../assets/logo/Logo-Ccl-pink.svg";
import LGV from "../assets/logo/Logo-Ccl-pinkVer.svg";
import './Navbar.css'

export const Navbar = ({objecLanguage,setChangeLanguage,handleChange,dark}) => {
  const [nav, setNav] = useState(false); 
    
  const handleClick = ({objecLanguage}) => setNav(!nav); 
  
  
  return (
    <section
      className="navbar"
    >
      <div className="container " >
        <a         
          href="https://ccldev.com"
        >
          <img src={LG} alt="Logo Ccl" className=' img_desktop ' />
          <img src={LGV} alt="Logo Ccl" className='img_mobil ' />
        </a>        
            <>
              <NavbarDesktop
              objecLanguage={objecLanguage}
              />
              <Languages
              setChangeLanguage={setChangeLanguage}
               />
              <ButtonTheme
              handleChange={handleChange}
              />
            </>
       

        {/* Icon-Menu */}
        <div onClick={handleClick} className="icon_menu ">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobil Menu */}
        <NavbarMobil
          nav={nav}
          dark={dark}
          handleClick={handleClick}
          objecLanguage={objecLanguage}
        />

        {/* Social Icons */}

        <SocialIcons />


      </div>
    </section>
  );
};

