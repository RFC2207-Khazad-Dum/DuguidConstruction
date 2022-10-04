import { useUser } from '@auth0/nextjs-auth0';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/EmployeeAcc.module.css';


export default function EmployeeJobList({job}) {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState('');
  const {user, error, isLoading } = useUser();

  const assign = (user && user.role === 'Employer') ? (<Button variant="outline-success">Assign Job</Button>) : (<></>);

  const addNotes = () => {
    const option = {
      date: job.date,
      notes: notes,
    }
    axios.put('http://localhost:8080/addNotes', option)
      .then(() => {
        setNotes('');
        handleClose();
      })
      .catch((err) => console.error(err));

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 return (
      <div>
        <Accordion className={styles.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{job.title || 'Job Title'} <span className={styles.active}>Active</span><span className={styles.active}>HVAC</span><span className={styles.active}>Drywall</span><span className={styles.active}>Demolition</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Description</b>{`: ${job.description}`||`: Ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.`}
          </Typography>
          <Typography>
            <b>Services</b>: Drywall, HVAC, Demolition
          </Typography>
          <Typography>
            <b>Location</b>: {job.address}
          </Typography>
          <Typography>
            <b>Assigned Employee</b>: {job.assignedEmployee}
          </Typography>
          <Typography>
            <b>Attachments</b>: Some pictures
          </Typography>
          <Typography>
            <b>Attachments</b>: Some pictures
          </Typography>
          <Typography>
            <b>Notes</b>: {job.notes || 'no notes...'}
          </Typography>
          <Button variant="outline-success" onClick={handleShow}>Add Notes</Button>
          {assign}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Job Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Add notes on job here..." onChange={(e) => setNotes(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNotes}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}