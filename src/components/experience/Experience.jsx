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
            características que fuesen necesarias, utilizar las plantillas de la plataforma de amawebs para tener
            un esqueleto del sitio y luego utilizar conocimientos de HTML, CSS y JS para completar los sitios webs.
          </p>         
        </div>  
        </div>
        <div className="experience__card">
        <h3>Repartos Ya S.A.</h3>
        <h4>Personal Shopper Referente (Noviembre 2017 - Diciembre 2022)</h4>

        <div className='experience__card__check'>
          <BsFillBookmarkCheckFill className='experience__card__icon'/>
          <p>
            Repartos Ya es una empresa afiliada a Pedidos Ya, la cual se encarga de recibir, preparar y entregar las órdenes que
            se realizan a través del sitio web y la aplicación movil de Pedidos Ya. El puesto de Referente es un cargo que tiene
            como objetivo la organizar a los Personal Shopper para el correcto cumplimiento de sus funcionas, tambien se encarga de 
            comunicarse con los gerentes o encargados de las sucursales en caso de que sea necesario.            
          </p>          
        </div>
        <div className='experience__card__check'>
          <BsFillBookmarkCheckFill className='experience__card__icon'/>
          <p>
            Fue una experiencia laboral que no está directamente relacionada con el área de desarrollo web. Esto se debe a que fue 
            el primer trabajo en blanco que logré conseguir al migrar de Venezuela a Argentina. Mientras me encontraba en este laburo
            aproveché a realizar cursos y una carrera en área de programación, para recibir un formación profesional en el área de desarrollo web.
          </p>         
        </div> 
        <div className='experience__card__check'>
          <BsFillBookmarkCheckFill className='experience__card__icon'/>
          <p>
            En diciembre del 2022 debido a un cambio en la políticas de entrega de pedidos entre Pedidos Ya y los comercios afiliados, 
            perdí este empleo y me encuentro actualmente en busca de uno en el área de desarrollo web.
          </p>         
        </div>  
        </div>
      </div>
      

    </section>
  )
}

export default Experience