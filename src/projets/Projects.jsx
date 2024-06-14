import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import projectsArray from '../helpers/projects.js'
import { BsGithub } from "react-icons/bs";
import FV from "../assets/logo/Festival-r.png";
import AW from "../assets/logo/weatherApi-r.png";
import VT from "../assets/logo/vterinary-r.png";
import CM from "../assets/logo/cryptocurrencies-r.png";
import GA from "../assets/logo/gifApp-r.png";
import CT from "../assets/logo/crypto-tailwimd.png";
import TA from "../assets/logo/topActress-r.png";
import BS from "../assets/logo/Expert-bs.png";


export const Projects = () => {

  const { objecLanguage } = useContext(DataContext);
  const { projects } = objecLanguage;

  const projectLogos = {
    FV,
    AW,
    VT,
    CM,
    GA,
    CT,
    TA,
    BS
  };
  return (
    <div
      className=" container m-auto w-10/12 md:w-6/12"
      name="projects"
    >
      <div className=" ">
        <header className=" mb-5 ">
          <p className="capitalize font-bold text-4xl mb-5">{projects.ptitle}</p>
          <p className="transition-colors duration-300 ease-in hover:text-hover ">{`// ${projects.psubtitle}`}</p>
        </header>
        <main className="onlyProjects flex flex-wrap justify-between ">

          {projectsArray.map(projecUni => (

            <article key={projecUni.src} className="w-full sm:w-5/12 md:w-29 shadow-2xl ">
              <div className="py-8">
                <header className="text-center">

                  <h2 className="text-2xl font-bold mb-2">{projecUni.title}</h2>


                  <h3 className="text-lg mb-4">{projecUni.subtitle}</h3>
                </header>
                <main>
                  <a href={projecUni.websitename} target="_blank" className="">
                    <img
                      className="img object-cover object-center h-48 w-60 mx-auto mb-4"
                      src={projectLogos[projecUni.src]}
                      alt={projecUni.alt}
                    />
                  </a>
                </main>
                <footer className="text-center">
                  <a
                    href={projecUni.href}
                    target="_blank"
                    className="block mb-2"
                  >
                    <p className="linkName">{projecUni.websitename}</p>{" "}
                    <p className="icon"><BsGithub/></p>

                  </a>
                </footer>
              </div>
            </article>
          ))}



        </main>
      </div>
    </div>
  );
};



