import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <Button variant="dark" size="sm" className='card__btn__project'>Más Infromación</Button>
            <Button variant="primary" size="sm" className='card__btn__project' href={props.cardLink} target={props.cardTarget}>Prueba Online</Button>
        </div>        
      </Card.Body>
    </Card>
  )
}

export default ProjectCards