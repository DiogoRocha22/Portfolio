import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import Presentation from './components/presentation/Presentation'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <section id='container'>
      <Presentation />
      <Skills />
      <Projects />
      <Footer/>
    </section>
  </React.StrictMode>,
)
