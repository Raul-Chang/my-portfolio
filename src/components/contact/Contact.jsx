import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>¿Quieres Comunicarte Conmigo?</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__content">
          <div className="contact__cards">
            <article className="contact__card">
              
              <BsLinkedin className='contact__icon' />
              <h5>Linkedin</h5>                          
            </article>
            <article className="contact__card">
              <FaGithub className='contact__icon' />
              <h5>Github</h5>                         
            </article>
            <article className="contact__card">
              <a href="mailto:rauledchangto@gmail.com">
                <FiMail className='contact__icon' />
                <h5>Mail</h5> 
              </a>                      
            </article>
          </div>
        </div> 
      </div>

    </section>
  )
}

export default Contact