import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function EmployeeScheduleTable({jobs}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Table striped='columns' size='lg' bordered hover style={{backgroundColor: 'white', textAlign: 'left', lineHeight: '2.5vh', verticalAlign: 'middle', height: '20vh', 'overflowY': 'auto', fontSize: '1.4vw'}}>
        <thead style={{backgroundColor: 'lightblue'}}>
          <tr>
            <th style={{ width: '10vw' }}>Date</th>
            <th>Job</th>
            <th>Employee</th>
            <th style={{ overflowWrap: 'break-word'}}>Tools Needed</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => {
            return (
              <tr key={index}>
                <td style={{fontSize: '1.1vw'}}>{job.date.slice(0,10)}</td>
                <td style={{fontSize: '1.1vw'}}>{job.title}</td>
                <td style={{fontSize: '1.1vw'}}>{job.assignedEmployee}</td>
                <td style={{fontSize: '1.1vw'}}>
                  <Button variant="outline-success" onClick={handleShow}>
                    Tools
                  </Button>
                </td>
              </tr>)
          })}
        </tbody>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tools Needed For Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tools Here
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>

  )
};