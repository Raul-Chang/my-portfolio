import React from 'react'
import './projects.css'
import ProjectCards from './ProjectCards'
import PORTAFOLIO from '../../assets/portafolio1.png' 
import CHOCO from '../../assets/xchocostorex.jpg' 
import WORLD from '../../assets/WorldOfPC.jpg' 

function Projects() {
  return (
    <section id='projects'>
      <h5>¿Qué Ideas Me Han Inspirado?</h5>
      <h2>Mis Proyectos</h2>

      <div className="container projects__container">

        <ProjectCards 
          cardTitle = "Portafolio"
          cardText = "Es mi proyecto de portafolio, donde aplico diferentes tecnologías y es completamente responsive"
          cardImg = {PORTAFOLIO}  
          cardLink = "#header"  

        />
        <ProjectCards 
          cardTitle = "World of PC"
          cardText = "Proyecto final para mi curso de React Js. El tema es un ecommerce de una tienda de Monitores de PC"
          cardImg = {WORLD}  
          cardLink = "https://proyecto-react-raul-chang.netlify.app/"   
          cardTarget = "_blank"   
        />
        <ProjectCards 
          cardTitle = "xChocostorex"
          cardText = "Consiste en un modelo de ecommerce relacionada con chocolate. Fue un proyecto para un curso de Javascript"
          cardImg = {CHOCO}    
          cardLink = "https://raul-chang.github.io/xChocostorex-Raul_Chang/"  
          cardTarget = "_blank"   
        />        
      </div>
    </section>
  )
}

export default Projects