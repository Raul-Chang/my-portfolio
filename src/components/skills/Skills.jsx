import React from 'react'
import './skills.css'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {FaBootstrap, FaReact} from 'react-icons/fa'
import {SiVisualstudio, SiMysql} from 'react-icons/si'
import IMAGE from '../../assets/skills.jpg'


const Skills = () => {
  return (
    <section id='skills'>
      <h5>¿Qué Conocimientos Tengo?</h5>
      <h2>Mis Habilidades</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Desarrollo Web</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <AiFillHtml5 className='skills__icon'/>
              <h4>HTML</h4>
            </article>

            <article className='skills__details'>
              <IoLogoCss3 className='skills__icon'/>
              <h4>CSS3</h4>
            </article>

            <article className='skills__details'>
              <IoLogoJavascript className='skills__icon'/>
              <h4>Javascript</h4>
            </article>
            <article className='skills__details'>
              <FaBootstrap className='skills__icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className='skills__details'>
              <FaReact className='skills__icon'/>
              <h4>React Js</h4>
            </article>
            <article className='skills__details'>
              <AiFillGithub className='skills__icon'/>
              <h4>Git & Github</h4>
            </article>
            <article className='skills__details'>
              <SiVisualstudio className='skills__icon'/>
              <h4>Visual Studio</h4>
            </article>
            <article className='skills__details'>
              <SiMysql className='skills__icon'/>
              <h4>Base de datos SQL</h4> 
            </article>
          </div>
        </div>
        <div className='skills__imgcont'>
          <img src={IMAGE} alt="" className='img__rotate'/>
        </div>
      </div>
    </section>
  )
}

export default Skills