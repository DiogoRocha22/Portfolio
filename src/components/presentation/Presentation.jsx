import React from 'react'
import './index.scss'
import { NavLink } from 'react-bootstrap'
import ButtonA from '../elements/button-a/ButtonA'

const Presentation = () => {
  return (
    <div id='presentation'>
        <h4>Olá, eu sou o Diogo!</h4>

        <h1 className='presentation__title'>React Developer</h1>
       
        <p>     Sou fanático em aprender e me aprimorar buscando cada vez ser melhor. Como Dev Front-end, 
            eu tenho o compromisso de resolver problemas complexos e trazer sites excepcionais
            atendendo a demanda dos clientes. Atualmente trabalho como freelancer e estou 
            sempre em busca de novos desafios para superar.
        </p>
        
        <NavLink target='blank' href='https://www.linkedin.com/in/diogo-rocha-361281256/'><ButtonA text='Conecte-se comigo!! ' /></NavLink>
    </div>
  )
}

export default Presentation