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
          data= {props.data}
          />
            <a role='button' className='card__btn__project btn btn-dark' href={props.cardLink} target={props.cardTarget}>Prueba Online</a>
        </div>        
      </Card.Body>
    </Card>
  )
}

export default ProjectCards