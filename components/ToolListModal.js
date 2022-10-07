import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ToolList from './ToolList';
import Button from 'react-bootstrap/Button';

export default function ToolListModal({tools, show, task, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tools Needed For Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ToolList tools={tools}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

