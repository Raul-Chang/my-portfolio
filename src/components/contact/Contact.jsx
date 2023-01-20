import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import CV from '../../assets/cv.pdf'
import {BiDownload} from 'react-icons/bi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>¿Quieres Comunicarte Conmigo?</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__content">
          <div className="contact__cards">
            <article className="contact__card">
              <a href="https://www.linkedin.com/in/raul-chang-link/" target="_blank">
                <BsLinkedin className='contact__icon' />
                <h5>Linkedin</h5> 
              </a>                                       
            </article>
            <article className="contact__card">
              <a href="https://github.com/Raul-Chang" target="_blank">
                <FaGithub className='contact__icon' />
                <h5>Github</h5> 
              </a>                                      
            </article>
            <article className="contact__card">
              <a href="mailto:rauledchangto@gmail.com" target="_blank">
                <FiMail className='contact__icon' />
                <h5>Mail</h5> 
              </a>                      
            </article>
            <article className="contact__card">
              <a href={CV} target="_blank">
                <BiDownload className='contact__icon' />
                <h5>CV</h5> 
              </a>                      
            </article>            
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Contact