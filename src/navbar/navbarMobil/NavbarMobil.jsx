import React from 'react'
import { Link } from "react-scroll";
import './NavbarMobil.css'


const NavbarMobil = ({ objecLanguage, nav, dark, handleClick }) => {
    const { navbar } = objecLanguage


    return (

        <ul
            className={
                !nav
                    ? "hidden-block "
                    : `visible-block ${dark}`
            }
        >

            <li className=" ">
                <Link onClick={handleClick} 
                to="about" 
                smooth={true} 
                duration={500}>
                    {navbar.about}
                </Link>
            </li>
            <li className=" ">
                <Link onClick={handleClick} 
                to="projects" 
                smooth={true} 
                duration={500}>
                    {navbar.projects}
                </Link>
            </li>

            <li className=" ">
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