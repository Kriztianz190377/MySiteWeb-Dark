import { BsGithub } from "react-icons/bs";
import FV from "../assets/logo/Festival-r.png";
import AW from "../assets/logo/weatherApi-r.png";
import VT from "../assets/logo/vterinary-r.png";
import CM from "../assets/logo/cryptocurrencies-r.png";
import GA from "../assets/logo/gifApp-r.png";
import CT from "../assets/logo/crypto-tailwimd.png";
import TA from "../assets/logo/topActress-r.png";
import BS from "../assets/logo/Expert-bs.png";
import Project from './Project';


import './Projects.css'
export const Projects = ({ objecLanguage }) => {

  const { projects } = objecLanguage
   
  return (

    <div
      name="projects"
      className="projects container"
    >
      <div className="project_content">
        
        <header className="title">
          <p className="">
            {projects.ptitle}
          </p>
          <p className="">{`// ${projects.psubtitle}`}</p>
        </header>

        <main className="onlyProjects">

          <article className=" ">
            <Project
              title={"React.Js"}
              subtitle={"@Vite/Tailwind Css"}
              src={VT}
              alt={"Veterinary"}
              websitename={"https://veterinary.ccldev.com"}
              href={"https://github.com/Kriztianz190377/Veterinary"}
              icon={<BsGithub />}
            />
          </article>

          <article className="">
            <Project
              title={"React.Js"}
              subtitle={"Crypto"}
              src={CT}
              alt={"Veterinary"}
              websitename={"https://cryptotw.ccldev.com/"}
              href={"https://github.com/Kriztianz190377/Crypto-TailwindCss"}
              icon={<BsGithub />}
            />
          </article>
          <article className=" ">
            <Project
              title={"React.Js"}
              subtitle={"@Vite/Styled-Components"}
              src={CM}
              alt={"Crypto"}
              websitename={"https://crypto.ccldev.com/"}
              href={"https://github.com/Kriztianz190377/Crypto"}
              icon={<BsGithub />}
            />
          </article>
          <article >
            <Project
              title={"React.Js"}
              subtitle={"Css3"}
              src={GA}
              alt={"Veterinary"}
              websitename={"https://kriztianz190377.github.io/Gif-react"}
              href={"https://github.com/Kriztianz190377/Gif-react"}
              icon={<BsGithub />}
            />
          </article>

          <article >
            <Project
              title={"React.Js"}
              subtitle={"Sass/GulpJs"}
              src={FV}
              alt={"Festival/Sass"}
              websitename={"https://festival.ccldev.com"}
              href={"https://github.com/Kriztianz190377/FestivalReact"}
              icon={<BsGithub />}
            />
          </article>
          <article >
            <Project
              title={"JavaScript"}
              subtitle={"Sass/Html"}
              src={AW}
              alt={"Weather App"}
              websitename={"https://weather.ccldev.com"}
              href={"https://github.com/Kriztianz190377/SassWeatherApi"}
              icon={<BsGithub />}
            />
          </article>

          <article >
            <Project
              title={"jQuery"}
              subtitle={"Css3"}
              src={TA}
              alt={"jQuery"}
              websitename={"https://actrice.ccldev.com"}
              href={"https://github.com/Kriztianz190377/jQuery"}
              icon={<BsGithub />}
            />
          </article>
          <article >
            <Project
              title={"Bootstrap 5"}
              subtitle={"Html"}
              src={BS}
              alt={"Bootstrao 5"}
              websitename={"https://expert-bs.ccldev.com"}
              href={"https://github.com/Kriztianz190377/expert-bs"}
              icon={<BsGithub />}
            />
          </article>

        </main>

      </div>
    </div>

  );
};

