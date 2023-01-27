import React from 'react'
import './projects.css'
import ProjectCards from './ProjectCards'
import projectsData2 from './projectsData.js'


function Projects() {
  console.log(projectsData2[0].images[0].source);
  return (
    <section id='projects'>
      <h5>¿Qué Ideas Me Han Inspirado?</h5>
      <h2>Mis Proyectos</h2>

      <div className="container projects__container">

        {projectsData2.map((data) => (
          <ProjectCards 
          cardTitle = {data.title}
          cardText = {data.cardDescription}
          cardImg = {data.images[0].source}  
          cardLink = {data.cardLink} 
          cardTarget = {data.cardTarget}
          data={data}
        />
        ))}             
      </div>
    </section>
  )
}

export default Projects