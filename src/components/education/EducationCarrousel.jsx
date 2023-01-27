import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import GIT from '../../assets/Certificado-Git_-Desarrollo-Colaborativo-EducaciónIT.jpeg'
import JAVA from '../../assets/Certificado-Java-Principiantes-EducaciónIT.jpeg'
import REACT from '../../assets/Certificado-ReactJS.png'
import JS from '../../assets/Certificado-JS.png'
import WEBDEV from '../../assets/Certificado-DesarrolloWeb.png'
import SQL from '../../assets/Certificado-Introduccion-a-Bases-de-Datos-y-SQL-EducaciónIT.jpeg'


class EducationCarrousel extends React.Component{render() {
  return (
    <Carousel className='education__carousel' interval={2500}>
        
    <Carousel.Item>
        <a href="https://www.coderhouse.com/certificados/638cf8293f43ff000f6ef0a6" target="_blank">
            <img
            className="d-block w-100"
            src={REACT}
            alt="Certificado ReactJS"
            />  
        </a>          
    </Carousel.Item>    
    <Carousel.Item>
        <a href="https://www.educacionit.com/perfil/raul-eduardo-chang-torrealba-276858/certificado/34427" target="_blank">
            <img
            className="d-block w-100"
            src={GIT}
            alt="Certificado GIT"
            />  
        </a>          
    </Carousel.Item>
    <Carousel.Item>
        <a href="https://www.coderhouse.com/certificados/63238336fdb80c000ee5d65b" target="_blank">
            <img
            className="d-block w-100"
            src={JS}
            alt="Certificado Javascript"
            /> 
        </a>           
    </Carousel.Item>
    <Carousel.Item>
        <a href="https://www.educacionit.com/perfil/raul-eduardo-chang-torrealba-276858/certificado/30391" target="_blank">
            <img
            className="d-block w-100"
            src={JAVA}
            alt="Certificado JAVA"
            />  
        </a>          
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://www.coderhouse.com/certificados/62ade2137fb4d300259b5561" target="_blank">
        <img
            className="d-block w-100"
            src={WEBDEV}
            alt="Certificado Desarrollo Web"
        />    
    </a>      
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://www.educacionit.com/perfil/raul-eduardo-chang-torrealba-276858/certificado/30382" target="_blank">
        <img
            className="d-block w-100"
            src={SQL}
            alt="Certificado SQL"
        />    
    </a>      
    </Carousel.Item>
  </Carousel>
  )
};
}

export default EducationCarrousel