import { useUser } from '@auth0/nextjs-auth0';
import Script from 'next/script'
import UploadWidget from './UploadWidget';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/EmployeeAcc.module.css';
import Geocode from 'react-geocode';


export default function EmployeeJobList({job}) {
  const [coordinates, setCoordinates] = React.useState([]);
  const [address, setAddress] = React.useState('');
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState('');
  const {user, error, isLoading } = useUser();

  const assign = (user && user.role === 'Employer') ? (
    <Dropdown>
    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
      Assign Employee
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onClick={e => assignJob(e)} name="Jacob" href="#/action-1">Jacob</Dropdown.Item>
      <Dropdown.Item onClick={e => assignJob(e)} name="Adam" href="#/action-2">Adam</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>) : (<></>);

  const addNotes = () => {
    const option = {
      condition: {description: job.description},
      change: {notes: notes},
    }
    axios.put('http://localhost:8080/editjob', option)
      .then(() => {
        setNotes('');
        handleClose();
      })
      .catch((err) => console.error(err));
  }

  const assignJob = (e) => {
    const option = {
      condition: {description: job.description},
      change: {assignedEmployee: e.target.name},
    }
    axios.put('http://localhost:8080/editjob', option)
      .then(() => console.log('success'))
      .catch((err) => console.error(err));
  }

  const handleImageUpload = (url) => {
    const option = {
      description: job.description,
      media: notes,
    }
    axios.put('http://localhost:8080/employeeimage', )
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDirectionsClick = function(e) {
    let name = e.target.getAttribute('tag');
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    Geocode.fromAddress(name)
      .then((res) => {
        setCoordinates([res.results[0].geometry.location.lat, res.results[0].geometry.location.lng])
        name.replace(' ', '+');
      })
      .then(() => { window.open(`https://www.google.com/maps/search/${name}/@${coordinates[0]},${coordinates[1]},17z`, '_blank', 'noopener,noreferrer')
      })
  };

  return (
    <>
      <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />
        <div>
          <Accordion className={styles.acc}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{job.title || 'Job Title'}
            <br />
            {job.categories.map((category, index) => <span key={index} className={styles.active}>{category}</span>)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accList}>
            <ul className={styles.accList}>
              <li>
                <Typography>
                  <b>Description</b>{`: ${job.description}`||`: Ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.`}
                </Typography>
                <Typography>
                  <b>Services</b>: Drywall, HVAC, Demolition
                </Typography>
                <Typography>
                <b>Location</b>: {job.address1}&nbsp;{job.address2},&nbsp;{job.city}
                </Typography>
                <Typography>
                  <b>Assigned Employee</b>: {job.assignedEmployee}
                </Typography>
                <Typography>
                  <b>Attachments</b>: Some pictures
                </Typography>
                <Typography>
                  <b>Notes</b>: {job.notes || 'no notes...'}
                </Typography>
              </li>
              <li>
                <Button className={styles.accJobBtn} tag={`${job.address1}, ${job.city}`} variant="outline-success" onClick={handleDirectionsClick}>Click Here For Directions</Button>{' '}
                <Button className={styles.accJobBtn} variant="outline-success" onClick={handleShow}>Add Notes</Button>
                {assign}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Job Notes</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Control type="text" placeholder="Add notes on job here..." onChange={(e) => setNotes(e.target.value)}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <UploadWidget handleImageUpload={handleImageUpload}/>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={addNotes}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}