import { useUser } from '@auth0/nextjs-auth0';
import Script from 'next/script'
import UploadWidget from './UploadWidget';
import PreviewGallery from './PreviewGallery';
import JobImage from './JobImage';
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
  const [coordinates, setCoordinates] = useState([]);
  const [address, setAddress] = useState('');
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState('');
  const [images, setImages] = useState([]);
  const {user, error, isLoading } = useUser();

  const assign = (user && user.role === 'Employer') ? (
    <Dropdown >
    <Dropdown.Toggle variant="outline-success" id="dropdown-basic" className={styles.accJobBtn}>
      Assign Employee
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <Dropdown.Item onClick={e => assignJob(e)} name="Jacob" href="#/action-1">Jacob</Dropdown.Item>
      <Dropdown.Item onClick={e => assignJob(e)} name="Adam" href="#/action-2">Adam</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>) : (<></>);

  const addNotes = () => {
    const option = {
      condition: {description: job.description},
      change: {
        notes: {
          note: notes,
          img: images
        }
      },
    }
    axios.put('http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/editjob', option)
      .then(() => {
        setImages([]);
        handleClose();
      })
      .catch((err) => console.error(err));
  }

  const addImages = (url) => {
    let temp = images;
    temp.push(url);
    setImages(temp);
    console.log('These are the images in state:, ', images)
  }

  const assignJob = (e) => {
    const option = {
      condition: {description: job.description},
      change: {assignedEmployee: e.target.name},
    }
    axios.put('http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/editjob', option)
      .catch((err) => console.error(err));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDirectionsClick = function(e) {
    let name = e.target.getAttribute('tag');
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    Geocode.fromAddress(name.toString())
      .then((res) => {
        setCoordinates([res.results[0].geometry.location.lat, res.results[0].geometry.location.lng])
        name.replace(' ', '+');
      })
      .catch((err) => console.log(err))
      .then(() => { window.open(`https://www.google.com/maps/search/${name}/@${coordinates[0]},${coordinates[1]},17z`, '_blank', 'noopener,noreferrer')
      })
  };

  return (
    <>
      <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />
        <div className={styles.holdsAccordion}>
          <Accordion className={styles.acc}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.jobTitles}>
              <div className={styles.jobTitles}>{job.title || 'Job Title'}</div>
            <br />
            <div className={styles.jobSpans}>{job.categories.map((category, index) => {
            if (index === 3) {
              return (
                <>
                  <span key={index} className={styles[category]}>
                    {category}
                  </span>
                  <br />
                </>
              );
            } else {
              return (
                <span key={index} className={styles[category]}>
                  {category}
                </span>
              );
            }
          })}</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accList}>
            <ul className={styles.accList}>
              <li>
                <Typography>
                  <span className={styles.jobColumns}>Description:</span>{` ${job.description}`||`: Ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.`}
                </Typography>
                <Typography>
                  {job.media.map((img, index) => <JobImage key={index} url={img} />)}
                </Typography>
                <Typography>
                  <span className={styles.jobColumns}>Location:</span> {job.address1}
                </Typography>
                <Typography>
                  <span className={styles.jobColumns}>Assigned Employee:</span> {job.assignedEmployee || 'None'}
                </Typography>
                {job.notes.map((note, index) =>
                  <Typography className={styles.notes} key={index}>
                    <span className={styles.jobColumns} >Note:</span> {note.note} {note.img.map((i, index) => <JobImage key={index} url={i}/> || '')}
                  </Typography>
                ) || 'no notes...'}
              </li>
              <li>
                <Button className={styles.accJobBtn} tag={`${job.address1}, ${job.city}`} variant="outline-success" onClick={handleDirectionsClick}>Click Here For Directions</Button>
                <Button className={styles.accJobBtn} variant="outline-success" onClick={handleShow}>Add Notes</Button>
                {assign}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Job Notes</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Control type="text" placeholder="Add notes on job here..." onChange={(e) => setNotes(e.target.value)}/>
                    <PreviewGallery photos={images} />
                  </Modal.Body>
                  <Modal.Footer>
                    <UploadWidget handleImageUpload={addImages}/>
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