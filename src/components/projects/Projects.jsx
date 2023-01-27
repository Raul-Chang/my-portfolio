import React from 'react'
import './projects.css'
import ProjectCards from './ProjectCards'
import PORTAFOLIO from '../../assets/portafolio1.png' 
import CHOCO from '../../assets/xchocostorex.jpg' 
import WORLD from '../../assets/WorldOfPC.jpg' 
import WORLD1 from '../../assets/worldofpc1.png'
import WORLD2 from '../../assets/worldofpc2.png'
import WORLD3 from '../../assets/worldofpc3.png'
import WORLD4 from '../../assets/worldofpc4.png'
import WORLD5 from '../../assets/worldofpc5.png'


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
          cardLink = "#home"  

        />        
        <ProjectCards 
          cardTitle = "World of PC"
          cardText = "Proyecto final para mi curso de React Js. El tema es un ecommerce de una tienda de Monitores de PC"
          cardImg = {WORLD}  
          cardLink = "https://proyecto-react-raul-chang.netlify.app/"   
          cardTarget = "_blank" 
          
          title = "World of PC"
          subtitle = "Ecommerce de Monitores de PC"
          description = "Fue mi primer proyecto utilizando React JS y sus Hooks. También fue la primera vez que implementé el uso de base de datos No SQL a un proyecto (Firebase). Cuenta con muchas funciones comunes en ecommerce como el uso de un carro de compra, separación del listado de productos por categorías, la creación de una orden de compra, etc."
          pill1 = "HTML5"
          pill2 = "CSS3"
          pill3 = "Javascript"
          pill4 = "React Js"
          pill5 = "React Hooks"
          pill6 = "Firebase"
          pill7 = "Git"
          pill8 = ""
          imgc1= {WORLD1}
          alt1= "world of PC Home"
          imgc2= {WORLD2}
          alt2= "world of PC Detail"
          imgc3= {WORLD3}
          alt3= "world of PC Cart"
          imgc4= {WORLD4}
          alt4= "world of PC BuyOrder"
          imgc5= {WORLD5}
          alt5= "world of PC List"
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