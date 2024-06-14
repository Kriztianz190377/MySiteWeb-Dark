import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import ME from "../assets/logo/castaneda2.jpg";

export const About = () => {
  const { dark, objecLanguage } = useContext(DataContext);

  const [about, setAbout] = useState({});
  const [text, setText] = useState("");
  
  useEffect(() => {
    const { about } = objecLanguage;
    setAbout(about);
    setText(about.h1);
  }, [objecLanguage]);

  return (
    <section 
    name="about" 
    className="container w-10/12  m-auto h-screen flex justify-center items-center 
                      md:w-6/12"
                      >

      <div className={`${dark} w-full flex justify-center items-center flex-col `}>
        
        <div className=" w-full ">
         
            <img
              className="h-full rounded-full object-cover transition-transform duration-300 hover:rotate-12"
              width={100}
              src={ME}
              alt="Christian Castaneda image"
            />
          
        </div>

        <div className="w-full font-bold  mb-5">
          <h2 className="text-xl my-5 md:text-4xl text-pink-600">{about.p1} {''}
            <span className="hover:text-green-300 transition-all hover:scale-*">Christian Castaneda</span></h2>
          <div className="">
            
            <h1 className="my-5 text-green-300 text-3xl">{text}</h1>
          </div>
          <p className="p-text text-base text-gray-300">{about.p3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
