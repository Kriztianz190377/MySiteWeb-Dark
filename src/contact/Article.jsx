import { MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import contactLinks from "../helpers/contactLinks.js";
import { DataContext } from '../context/DataContext.jsx';
import { useContext } from 'react';

const iconsContact = {
  MdOutlineEmail: <MdOutlineEmail />,
  BsGithub: <BsGithub />,
  BsWhatsapp: <BsWhatsapp />,
};



const Article = () => {
  const { dark } = useContext(DataContext)
  return (
    <>
      {contactLinks.map(contactLink => (
        <article
          key={contactLink.title}       
          className={`${dark ==="bg-bgDark text-textColorLight"? "bg-indigo-900 " : "bg-blue-600 text-gray-100"}
           py-8 w-full rounded-md shadow-lg text-center transition duration-300 
        hover:bg-indigo-700`}
        >
          <span className='flex justify-center mb-2 text-4xl'> {iconsContact[contactLink.icon]}</span>
          <h5 className="text-2xl font-bold mb-1">{contactLink.title}</h5>
          <a
            href={contactLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            {contactLink.message}
          </a>
        </article>
      ))}
    </>
  );
};

export default Article;
