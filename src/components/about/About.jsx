import React from 'react'
import './about.css'
import ME from '../../assets/Raul-Chang-NoBG2.png'
import {FaMedal, FaUserGraduate} from 'react-icons/fa'
import {RiComputerLine} from 'react-icons/ri'
const About = () => {
  return (
    <section id='about'>
      
      <h5>¿Tienes Curiosidad?</h5>
      <h2>Acerca de Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Acerca de mi Photo"/>
          </div>
        </div>
        <div className='about__rigthcontent'>
        <p>
            Soy desarrollador web front-end con conocimientos de los lenguajes y herramientas más usados 
            en el área, como HTML, CSS, JS y React. Tengo experiencia trabajando en equipo y coordinando 
            con los clientes. Quiero seguir creciendo en el desarrollo web y me encuentro buscando empleo 
            como desarrollador web frontend.   
          </p>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className='about__icon' />
              <h5>Experiencia</h5>
              <small>6+ Meses Trabajando</small>              
            </article>
            <article className="about__card">
              <FaUserGraduate className='about__icon' />
              <h5>Educación</h5>
              <small>Carrera Desarrollo Frontend</small>              
            </article>
            <article className="about__card">
              <RiComputerLine className='about__icon' />
              <h5>Proyectos</h5>
              <small>5+ Completados</small>              
            </article>
          </div>          
          
        </div>
        <a href="#contact" className='btn btn-primary'>Contáctame!</a>
        </div>
        
      </div>


    </section>
  )
}

export default About