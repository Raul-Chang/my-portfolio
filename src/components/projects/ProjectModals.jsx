import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProjectModalCarousel from './ProjectModalCarousel'


function ProjectModals(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (       
    <>
      <Button variant="primary" onClick={handleShow} className='card__btn__project btn btn-primary'>
        Mas Información
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} className='project__modal'>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{props.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>            
            <div>
                <h4>{props.subtitle}</h4>
                <p>{props.description}</p>
            </div>
            <div>             
                <h4>Tecnologías utilizadas</h4>
                <div className='pill__container'>
                <div className='project__techpill'>{props.pill1}</div>
                <div className='project__techpill'>{props.pill2}</div>
                <div className='project__techpill'>{props.pill3}</div>
                <div className='project__techpill'>{props.pill4}</div>
                <div className='project__techpill'>{props.pill5}</div>
                <div className='project__techpill'>{props.pill6}</div>
                <div className='project__techpill'>{props.pill7}</div>
                <div className='project__techpill'>{props.pill8}</div>
                <div className='project__techpill'>{props.pill9}</div>
                <div className="project__techpill ">{props.pill10}</div>
              </div>
            </div>
            <ProjectModalCarousel 
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
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose} href="https://raul-chang.github.io/my-portfolio/">
            Prueba Online
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectModals