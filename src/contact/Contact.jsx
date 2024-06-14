import { MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { DataContext } from '../context/DataContext';
import React, { useContext, useRef } from 'react';
import emailjs from "@emailjs/browser";
// import sendEmail from '../helpers/sendEmail';
import Article from './Article';

export const Contact = () => {
  const { dark, objecLanguage} = useContext(DataContext);
  const { contact } = objecLanguage;
  const form = useRef();

  const sendEmail = (e) => {
    
     e.preventDefault();
     emailjs
       .sendForm(
         "service_t7n0w8a",
         "template_j67vxnv",
         form.current,
         "pPXM2ktdd2EUaQtT2"
       )
       .then(
         (result) => {
           console.log(result.text);
           alert('mensaje enviado')
         },
         (error) => {
           console.log(error.text);
         }
       );
     e.target.reset();
   };
 

  return (
    <div
      className=" container m-auto w-10/12 md:w-6/12 mb-10"
      name="contact"
    >
      <div className=" ">
        <header className=" mb-10 ">
          <p className="capitalize font-bold text-4xl mt-20 mb-5">{contact.ptitle}</p>
          <p className="transition-colors duration-300 ease-in hover:text-hover ">{`// ${contact.psubtitle}`}</p>
        </header>
        <main className="w-full flex flex-col lg:flex-row gap-10">
          <aside className='w-full lg:w-2/6 flex flex-col items-center justify-between gap-8 '>

           <Article/>
             
          </aside>


          <form ref={form} onSubmit={sendEmail} 
          className="w-full lg:w-4/6 flex flex-col gap-6">
            <input
              className={`p-4 border-2 rounded-md bg-transparent text-xl font-bold ${dark === "dark" ? "border-white" : "border-pink-500"}`}
              type="text"
              placeholder={contact.name}
              name="name"
              id="name"
            />
            <input
              className={`p-4 border-2 rounded-md bg-transparent text-xl font-bold ${dark === "dark" ? "border-white" : "border-pink-500"}`}
              type="email"
              placeholder={contact.email}
              name="email"
              id="email"
            />
            <input
              className={`p-4 border-2 rounded-md bg-transparent text-xl font-bold ${dark === "dark" ? "border-white" : "border-pink-500"}`}
              type="number"
              placeholder={contact.phone}
              name="phone"
              id="phone"
            />
            <textarea
              className={`p-4 border-2 rounded-md bg-transparent text-xl font-bold ${dark === "dark" ? "border-white" : "border-pink-500"}`}
              name="message"
              placeholder={contact.message}
              id="message"
              rows="10"
            ></textarea>
            <button
              className={`p-4 border-2 rounded-md bg-transparent text-xl font-bold ${dark === "dark" ? "border-white" : "border-pink-500"} hover:bg-pink-500 transition duration-300`}
              type="submit"
            >
              {contact.msnemail}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};


