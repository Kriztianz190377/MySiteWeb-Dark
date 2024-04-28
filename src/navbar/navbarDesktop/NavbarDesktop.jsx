import React from 'react'
import { Link } from "react-scroll";

import "./NavbarDesktop.css"

const NavbarDesktop = ({objecLanguage}) => {
    const {navbar}=objecLanguage    

    return (
        <ul className="navbar_desktop">
            
            <li >
                <Link to="about" 
                smooth={true} 
                duration={500}>
                    {navbar.about}
                </Link>
            </li>
            <li >
                <Link to="projects" 
                smooth={true} 
                duration={500}>
                {navbar.projects}
                </Link>
            </li>
            
            <li >
                <Link to="contact" 
                smooth={true} 
                duration={500}>
                {navbar.contact}
                </Link>
            </li>
        </ul>
    )
}

export default NavbarDesktop
