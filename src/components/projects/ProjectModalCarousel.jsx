import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Loader from '../loader/Loader'

function ProjectModalCarousel(props) {
        let emptyCarousel = props.data.images.length === 0;

        function carouselMap(){
                return (
                        props.data.images.map((dat) => (
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={dat.source}
                                        alt={dat.detail}
                                        />  
                                        <Carousel.Caption>
                                                <h3 className='project__carousel__caption'>{dat.detail}</h3>          
                                        </Carousel.Caption>
                                </Carousel.Item> 
                        ))
                )
        }
  return (
    <Carousel className='projects__carousel' interval={2500}>  
    {emptyCarousel ? <Loader /> :       
       carouselMap() }          
  </Carousel>
  )
}

export default ProjectModalCarousel