import React from 'react'
// import { L } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs"
import CVpdf from '../../assets/docs/ChristianC-CV.pdf'
import './SocialIcons.css'

const SocialIcons = () => {

    return ( 
        <div className="social_icons ">
                        <ul>
                <li
                    className=" first-li"
                    style={{ backgroundColor: 'blue' }}
                >
                    <a
                        href="https://www.linkedin.com/in/christian-castaneda-cclweb/"
                        target="_blank"
                    >
                        LinkedIn 
                        <FaLinkedin size={30} />
                    </a>
                </li>

                <li
                    className="first-li"    
                    style={{ backgroundColor: '#C83A6E' }}            
                >

                    <a
                        href="https://github.com/Kriztianz190377"
                        target="_blank"                   
                    >
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li
                    className="first-li"
                    style={{ backgroundColor: '#6fc2b0' }}
                >
                    <a
                        href="contact"
                        smooth={true}
                        duration={500}
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li
                    className="first-li"
                    style={{ background: '#565f69' }}
                >
                    <a
                        href={CVpdf}
                        download
                    >
                        Resume <BsPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialIcons