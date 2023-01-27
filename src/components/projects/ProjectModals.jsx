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
            <h2>{props.data.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>            
            <div>
                <h4>{props.data.modalSubtitle}</h4>
                <p>{props.data.modalDescription}</p>
            </div>
            <div>             
                <h4>Tecnologías utilizadas</h4>
                <div className='pill__container'>
                <div className='project__techpill'>{props.pill1}</div>
                {props.data.technologies.map((tech) => (
                  <div className='project__techpill'>{tech}</div>
                ))}
              </div>
            </div>
            <ProjectModalCarousel 
            data= {props.data}
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