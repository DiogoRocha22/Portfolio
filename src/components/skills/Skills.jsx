import React from 'react'
import './index.scss'
import javaLogo from './../../assets/javascript.svg'
import htmlLogo from './../../assets/html.svg'
import cssLogo from './../../assets/css.svg'
import reactLogo from './../../assets/react.svg'
import nodeLogo from './../../assets/nodejs.png'

const Skills = () => {
  return (
    <div id='skills'>
        <h1>Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
        <img className='skills__js' src={javaLogo} alt="error" />
        <img className='skills__html' src={htmlLogo} alt="error" />
        <img className='skills__css' src={cssLogo} alt="error" />
        <img className='skills__react' src={reactLogo} alt="error" />
        <img className='skills__node' src={nodeLogo} alt="error" />
    </div>
  )
}

export default Skills