import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import NavbarDesktop from "./navbarDesktop/NavbarDesktop";
import NavbarMobil from "./navbarMobil/NavbarMobil";
import SocialIcons from "./socialIcons/SocialIcons";
import { FaBars, FaTimes } from "react-icons/fa";
import { Languages } from "./changes-languages/Languages";
import ButtonTheme from "./buttonTheme/ButtonTheme";

import LG from "../assets/logo/Logo-Ccl-pink.svg";
import LGV from "../assets/logo/Logo-Ccl-pinkVer.svg";

export const Navbar = () => {
 
  const {nav, setNav,handleClick} = useContext(DataContext);

 

  return (
    <section className="w-full bg-inherit text-inherit fixed flex 
                        justify-center items-center text-md
                        font-bold tracking-wide z-10">
      <div className="container flex flex-row justify-between items-center uppercase p-2.5">
        <a href="https://ccldev.com">
          <img src={LG} alt="Logo Ccl" className="hidden md:block w-28" />
          <img src={LGV} alt="Logo Ccl" className="block md:hidden w-28 mt-3 md:mt-0" />
        </a>

        <NavbarDesktop />
        <Languages     />
        <ButtonTheme   />

        {/* Icon-Menu */}
        <div onClick={handleClick} className="text-4xl md:hidden">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobil Menu */}
        <NavbarMobil/>

        {/* Social Icons */}
        <SocialIcons />
      </div>
    </section>
  );
};
