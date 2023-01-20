import React from 'react'
import CV from '../../assets/cv.pdf'

function HeaderContact() {
  return (
    <div className='header__contact'>
        <a href={CV} className='btn' target="_blank">Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contacto</a>
    </div>
  )
}

export default HeaderContact