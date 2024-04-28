import { Link } from "react-scroll";


const Project = ({
  title,
  subtitle,
  src,
  alt,
  websitename,
  href,
  icon,
}) => {
  return (
    <>

      <header className=" project">

        <h2 className=" ">{title}</h2>
        <h3>{subtitle}</h3>
      </header>

      <main>        
          <a href={websitename} target="_blank" className="">
            <img className="img" src={src} alt={alt} height={200} width={250}/>
          </a>
        
      
      </main>

      <footer className=" ">
        <a
          href={href}
          target="_blank"
          className=""
        >
          <p className="linkName">{websitename}</p>{" "}
          <p className="icon ">{icon}</p>
        </a>
      
      </footer>

    </>
  );
};

export default Project;
