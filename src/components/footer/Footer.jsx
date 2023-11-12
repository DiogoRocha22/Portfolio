import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons';
import './index.scss'


const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <IconContext.Provider value={{className: 'iconCSS'}}>
                <ul>
                    <li><a target='blank' href="https://github.com/DiogoRocha22"><FaGithub/></a></li>
                    <li><a target='blank' href="https://www.instagram.com/diogo_rochazx/"><FaInstagram/></a></li>
                    <li><a target='blank' href="https://www.linkedin.com/in/diogo-rocha-361281256/"><FaLinkedin /></a></li>
                </ul>
            </IconContext.Provider>
        </footer>
    </div>
  )
}

export default Footer