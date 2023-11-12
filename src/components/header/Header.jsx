import React from 'react'
import './index.scss'
import { NavLink } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Header = () => {

  
  return (
    <div>
        <header className='navbar'> 
            <ul className='navbar__sections'>
                <li><NavLink className='navsPage' href="#presentation">Apresentação</NavLink></li>
                <li><NavLink className='navsPage' href='#skills'>Habilidades</NavLink></li>
                <li><NavLink className='navsPage' href="#projects">Projetos</NavLink></li>
            </ul>

            <IconContext.Provider value={{className: 'iconCSS'}}>  
              <ul className='navbar__icons'>
            
                <li><a target='blank' href="https://github.com/DiogoRocha22"> <FaGithub /> </a></li>
                <li><a target='blank' href="https://www.instagram.com/diogo_rochazx/"> <FaInstagram /> </a></li>
                <li><a target='blank' href="https://www.linkedin.com/in/diogo-rocha-361281256/"> <FaLinkedin /> </a></li>
                
              </ul>
            </IconContext.Provider>
        </header>
    </div>
  )
}

export default Header