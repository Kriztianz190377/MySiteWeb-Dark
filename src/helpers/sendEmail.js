
import emailjs from "@emailjs/browser";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const sendEmail = (e) => {
   const { form } = useContext(DataContext);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t7n0w8a",
        "template_yi85kyb",
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


  export default sendEmail