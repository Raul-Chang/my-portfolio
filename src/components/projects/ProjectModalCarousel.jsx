import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ProjectModalCarousel(props) {
  return (
    <Carousel className='projects__carousel' interval={2500}>        
    <Carousel.Item>
            <img
            className="d-block w-100"
            src={props.imgc1}
            alt={props.alt1}
            />  
    </Carousel.Item>    
    <Carousel.Item>
            <img
            className="d-block w-100"
            src={props.imgc2}
            alt={props.alt2}
            />  
    </Carousel.Item>
    <Carousel.Item>
            <img
            className="d-block w-100"
            src={props.imgc3}
            alt={props.alt3}
            /> 
    </Carousel.Item>
    <Carousel.Item>
            <img
            className="d-block w-100"
            src={props.imgc4}
            alt={props.alt4}
            />  
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={props.imgc5}
            alt={props.alt5}
        />    
    </Carousel.Item>
  </Carousel>
  )
}

export default ProjectModalCarousel