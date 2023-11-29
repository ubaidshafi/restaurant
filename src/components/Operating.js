

import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operating({operatingData}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  



  return (
    <div><Button variant="warning" className='w-100 p-3' onClick={handleShow}>
    <b className='fs-5'>Operating Hours </b> 
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title> <b> <span className='text-info'>O</span>perating 
      <span className='text-info'> H</span>ours</b></Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup>
      <ListGroup.Item> <b> Monday <span className='text-warning'>{operatingData.Monday}</span></b></ListGroup.Item>
      <ListGroup.Item><b> Tuesday <span className='text-warning'>{operatingData.Tuesday}</span></b></ListGroup.Item>
      <ListGroup.Item><b> Wednesday <span className='text-warning'>{operatingData.Wednesday}</span></b></ListGroup.Item>
      <ListGroup.Item><b> Thursday <span className='text-warning'>{operatingData.Thursday}</span></b></ListGroup.Item>
      <ListGroup.Item><b> Friday <span className='text-warning'>{operatingData.Friday}</span></b></ListGroup.Item>
      <ListGroup.Item><b> Saturday <span className='text-warning'>{operatingData.Saturday}</span></b></ListGroup.Item>
      <ListGroup.Item><b> Sunday <span className='text-warning'>{operatingData.Sunday}</span></b></ListGroup.Item>
    </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      <b> Close </b> 
      </Button>
      
    </Modal.Footer>
  </Modal></div>
  )
}

export default Operating