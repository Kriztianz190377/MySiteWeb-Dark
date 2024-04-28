import { MdOutlineEmail } from 'react-icons/md'
import { BsGithub, BsWhatsapp } from "react-icons/bs";

import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css'
import Article from './Article';

export const Contact = ({ dark, objecLanguage }) => {

  const { contact} = objecLanguage 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_myvkoyl",
        "template_yi85kyb",
        form.current,
        "pPXM2ktdd2EUaQtT2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };

  return (
    <div
      name="contact"
      className=" contact container"
    >
      {/* Container */}
      <div className="contact_content">

        <header className="title">
          <p className="">
            {contact.ptitle}
          </p>
          <p className="">// {contact.psubtitle}</p>
        </header>

        <main>

          <aside className='aside'>
            <Article
              icons={<MdOutlineEmail />}
              title={contact.email}
              href={"mailto:kriztianz@hotmail.com "}
              msn={contact.msnemail}
            />
            <Article
              icons={<BsGithub />}
              title={"GitHub"}
              href={"https://github.com/Kriztianz190377"}
              msn={contact.msngihub
              }
            />
            <Article
              icons={<BsWhatsapp />}
              title={"WhatsApp"}
              href={"https://wa.me/+14383966910"}
              msn={contact.msnwhatsapp}
            />


          </aside>
          {/* TODO enviar mensaje de respuesta al correo del emisario */}
          <form
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="form_input">

              <input
                style={dark == "dark" ? { borderColor: "#fff" } : { borderColor: "#C83A6E" }}
                type="text"
                placeholder={contact.name}
                name="name"
                id="name"
              />
              <input
                style={dark == "dark" ? { borderColor: "#fff" } : { borderColor: "#C83A6E" }}
                type="email"
                placeholder={contact.email}
                name="email"
                id="email"
              />
              <textarea
                style={dark == "dark" ? { borderColor: "#fff" } : { borderColor: "#C83A6E" }}
                name="message"
                placeholder={contact.message}
                id="message"
                rows="10"
              ></textarea>
              <button
                className="btn"
                style={dark == "dark" ? { borderColor: "#fff" } : { borderColor: "#C83A6E" }}
                type="submit"
              >
                {contact.msnemail}
              </button>
            </div>
          </form>

        </main>
      </div>
    </div>
  );
};


