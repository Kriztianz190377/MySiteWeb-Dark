import React, { useContext } from 'react';
import { Link as LinkRS} from "react-scroll";
import { DataContext } from '../../context/DataContext';



const NavbarDesktop = () => {
    const {objecLanguage} = useContext(DataContext);

    const { navbar } = objecLanguage;

    return (
        <ul className="hidden md:flex justify-between items-center cursor-pointer w-2/5 text-inherit">
            <li className="transition-colors duration-300 ease-in hover:text-hover">
                <LinkRS to="about" smooth={true} duration={500}>
                    {navbar.about}
                </LinkRS>
            </li>
            <li className="transition-colors duration-300 ease-in hover:text-hover">
                <LinkRS to="projects" smooth={true} duration={500}>
                    {navbar.projects}
                </LinkRS>
            </li>
            <li className="transition-colors duration-300 ease-in hover:text-hover">
                <LinkRS to="contact" smooth={true} duration={500}>
                    {navbar.contact}
                </LinkRS>
            </li>
        </ul>
    );
};

export default NavbarDesktop;
