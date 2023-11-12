import React from 'react'
import './index.scss'
import ButtonB from '../button-b/ButtonB'

const Cards = (props) => {
  return (
    <div className='cards'>
        
            <img src={props.img} alt="error" />
        
        <div className='cards__card'>
            <div className='cards_descript'>
              <h3>{props.title}</h3>
              <p><strong>Tecnologias:</strong> {props.tech}</p>
              <p>{props.descript}</p>
            </div>
            
            <a target='blank' href={props.link}>< ButtonB text='Acesse o repositório'/></a>
            
        </div>
    </div>
  )
}

export default Cards