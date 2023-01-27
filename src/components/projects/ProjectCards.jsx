import React from 'react'
import Card from 'react-bootstrap/Card';
import ProjectModals from './ProjectModals'

function ProjectCards(props) {
  return (
    <Card bg="dark" className='projects__cards' border="light" text='light' >
      <Card.Img variant="top" src={props.cardImg} />
      <Card.Body>
        <Card.Title className='projects__card__title'>{props.cardTitle}</Card.Title>
        <Card.Text>
          {props.cardText}
        </Card.Text>
        <div className='card__button_container'>
        <ProjectModals 
          title = {props.title}
          subtitle = {props.subtitle}
          description = {props.description}
          pill1 = {props.pill1} 
          pill2 = {props.pill2} 
          pill3 = {props.pill3} 
          pill4 = {props.pill4} 
          pill5 = {props.pill5} 
          pill6 = {props.pill6} 
          pill7 = {props.pill7} 
          pill8 = {props.pill8} 
          pill9 = {props.pill9} 
          pill10 = {props.pill10} 
          imgc1= {props.imgc1}
          alt1= {props.alt1}
          imgc2= {props.imgc2}
          alt2= {props.alt2}
          imgc3= {props.imgc3}
          alt3= {props.alt3}
          imgc4= {props.imgc4}
          alt4= {props.alt4}
          imgc5= {props.imgc5}
          alt5= {props.alt5}
          />
            <a role='button' className='card__btn__project btn btn-dark' href={props.cardLink} target={props.cardTarget}>Prueba Online</a>
        </div>        
      </Card.Body>
    </Card>
  )
}

export default ProjectCards