import React from 'react'
import './education.css'
import CARRER from '../../assets/Certificado-Carrera-Coderhouse.png'
import EducationCarrousel from './EducationCarrousel'

function Education() {
  return (
    <section id='education'>
      <h5>¿Qué Certificaciones Poseo?</h5>
      <h2>Educación</h2>
      <div className="container education__container">
        <div className='education__container__carrer'>
          <h3>Carrera de Estudio</h3>
          <a href="https://www.coderhouse.com/certificados/638cf8293f43ff000f6ef0a9" target="_blank">
            <img src={CARRER} alt="Certificado Carrera" className='education__carrer_img'/>
          </a>
        </div>
        <div className="education__container__carousel">
          <h3>Cursos Certificados</h3>
          <EducationCarrousel />
        </div>
      </div>

    </section>
  )
}

export default Education