import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import CVpdf from '../../assets/docs/ChristianC-CV.pdf';

const SocialIcons = () => {


  return (
    <div className="hidden md:flex fixed bottom-6 left-[-120px] flex-col gap-2">
      <ul>
        <li className="bg-blue-500 w-40 p-2 rounded-lg flex items-center justify-end transition-transform duration-300 hover:translate-x-[120px]">
          <a href="https://www.linkedin.com/in/christian-castaneda-cclweb/" target="_blank" className="text-white flex items-center space-x-2">
            <span>LinkedIn</span>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="bg-pink-600 w-40 p-2 rounded-lg flex items-center justify-end transition-transform duration-300 hover:translate-x-[120px]">
          <a href="https://github.com/Kriztianz190377" target="_blank" className="text-white flex items-center space-x-2">
            <span>Github</span>
            <FaGithub size={30} />
          </a>
        </li>
        <li className="bg-green-500 w-40 p-2 rounded-lg flex items-center justify-end transition-transform duration-300 hover:translate-x-[120px]">
          <a href="contact" className="text-white flex items-center space-x-2">
            <span>Email</span>
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="bg-gray-600 w-40 p-2 rounded-lg flex items-center justify-end transition-transform duration-300 hover:translate-x-[120px]">
          <a href={CVpdf} download className="text-white flex items-center space-x-2">
            <span>Resume</span>
            <BsPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
