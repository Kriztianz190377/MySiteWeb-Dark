import { Link } from "react-scroll";
import { HiArrowNarrowRight } from 'react-icons/hi'
import ME from "../assets/logo/castaneda2.jpg";
import { useTypewriter } from 'react-simple-typewriter';

import './About.css'
import { useEffect, useState } from "react";

export const About = ({ objecLanguage, darkAbout, dark }) => {

  const [about, setAbout] = useState({})
  const [text, setText] = useState("") 
  useEffect(() => {
    const { about } = objecLanguage
    setAbout(about)
    setText(about.h1)

  }, [objecLanguage])


  return (
    <div
      name="about"
      className="about container"
    >
      <div className={dark === 'dark' ? `about_content` : 'about_content light'}>

        <div className="content-left ">
          <div
            className="bg-img "
          >
            <img
              className="
              me-img 
              rounded-3xl  rotate-12 h-[200px] 
              hover:rotate-0 duration-500 mb-4 
              md:w-[200px] 
              md:h-[250px] "
              src={ME}
              alt=""
              sizes=""
              srcSet=""
            />
          </div>
        </div>

        <div className="content-rigth">

          <p className="p1" >{about.p1}</p>

          <h2
            style={dark === "dark" ?
              { color: "#CCD6F6" }
              :
              { color: "inherit" }
            }>
            Christian Castaneda
          </h2>
          {/* h1==div
span==h1 */}
          <div className="iam">
            <p className="p2">{about.p2}</p>
            <h1 >{text}</h1>
          </div>
          <p
            style={dark === "dark" ? { color: "#ccd6f6" } : { color: "inherit" }}
            className="p-texte ">{about.p3}
          </p>



        </div>

      </div>

    </div>
  );
};


