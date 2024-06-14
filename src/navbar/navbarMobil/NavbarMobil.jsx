import React, { useContext } from 'react'
import { Link } from "react-scroll";
import { DataContext } from '../../context/DataContext';

const NavbarMobil = () => {

  const { objecLanguage, nav, dark, handleClick } = useContext(DataContext);
  const { navbar } = objecLanguage

  return (
    <ul className={`text-inherit ${nav ? 'absolute top-36 left-0 w-full h-screen pt-40 flex flex-col justify-start items-center gap-20 z-0' : 'hidden'} ${dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <li className="p-4  transition-colors duration-300 ease-in hover:text-pink-700">
        <Link onClick={handleClick} 
              to="about" 
              smooth={true} 
              duration={500}>
          {navbar.about}
        </Link>
      </li>
      <li className="p-4 transition-colors duration-300 ease-in hover:text-pink-700">
        <Link onClick={handleClick} 
              to="projects" 
              smooth={true} 
              duration={500}>
          {navbar.projects}
        </Link>
      </li>
      <li className="p-4 transition-colors duration-300 ease-in hover:text-pink-700">
        <Link onClick={handleClick} 
              to="contact" 
              smooth={true} 
              duration={500}>
          {navbar.contact}
        </Link>
      </li>
    </ul>
  )
}

export default NavbarMobil
