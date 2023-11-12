import React from 'react'
import './index.scss'
import Cards from '../elements/cards-project/Cards'
import ButtonB from '../elements/button-b/ButtonB'

const Projects = () => {
  return (
    <div className='projects'>
        <h1>Projetos</h1>
        <Cards link='https://github.com/DiogoRocha22/dnc-ecommerce' title='Projeto E-commerce' tech='HTML, SCSS, JS, REACT' descript='Projeto React de Loja Online'/>
        <Cards title='Site Empresarial' tech='HTML, SCSS, JS, REACT' descript='Projeto para site informacional da igreja' />
        
        <div className='projects__button'>
          <a target='blank' href="https://github.com/DiogoRocha22?tab=repositories">< ButtonB text='Ver o repositório completo' /></a>
        </div>
    </div>
  )
}

export default Projects