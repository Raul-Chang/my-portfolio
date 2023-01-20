import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>¿Dónde he Trabajado?</h5>
      <h2>Experiencia Laboral</h2>

      <div className="container experience__container">

        <div className="experience__card">
        <h3>Oficina Publicitaria Amarillas Internet</h3>
        <h4>Desarrollador FrontEnd (Octubre 2016 - Mayo 2017)</h4>

        <div className='experience__card__check'>
          <BsFillBookmarkCheckFill className='experience__card__icon'/>
          <p>
            Amarillas Internet es una empresa internacional publicitaria, la cual se dedica a crear un directorio online de locales,
            comercios, centros culturales, profesionales, etc. Para que sus usuarios pueden fácilmente realizar búsquedas
            de los rubros que necesiten. Ofrece diferentes tipos de anuncios y servicios publicitarios, entre los cuales 
            se encuentra aportar una pagina web dedicada al cliente, dentro del dominio de la empresa. Y la cual se arma
            utilizando la plataforma <a href="https://www.amawebs.com/">amawebs</a>.            
          </p>          
        </div>
        <div className='experience__card__check'>
          <BsFillBookmarkCheckFill className='experience__card__icon'/>
          <p>
            Fue mi primera experiencia laboral en el área de la programación, tuve que trabajar constantemente con un 
            equipo para comenzar el diseño y armado de los sitios webs para los clientes de la oficina.  
          </p>         
        </div> 
        <div className='experience__card__check'>
          <BsFillBookmarkCheckFill className='experience__card__icon'/>
          <p>
            Las responsabilidades del cargo incluían comunicarse con los clientes para determinar posibles diseños Y
            características que deseaban los clientes, utilizar las plantillas de la plataforma de amawebs para tener
            un esqueleto del sitio y luego utilizar conocimientos de HTML, CSS y JS para completar los sitios webs.
          </p>         
        </div>  
        </div>
      </div>
      

    </section>
  )
}

export default Experience