import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from 'react-bootstrap/Button';
import styles from '../styles/EmployeeAcc.module.css';
import Geocode from 'react-geocode';


export default function EmployeeJobList({job}) {
  const [coordinates, setCoordinates] = React.useState([]);
  const [address, setAddress] = React.useState('');

  const handleDirectionsClick = function(e) {
    let name = e.target.getAttribute('tag');
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    Geocode.fromAddress(name.toString())
      .then((res) => {
        setCoordinates([res.results[0].geometry.location.lat, res.results[0].geometry.location.lng])
        name.replace(' ', '+');
      })
      .then(() => { window.open(`https://www.google.com/maps/search/${name}/@${coordinates[0]},${coordinates[1]},17z`, '_blank', 'noopener,noreferrer')

      })
  };

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
                <b>Location</b>: 1234 Main St, Sometown, ST, 12345
              </Typography>
              <Typography>
                <b>Assigned Employee</b>: Jacob Gramer
              </Typography>
              <Typography>
                <b>Attachments</b>: Some pictures
              </Typography>
            </li>
            <li>
              <Button className={styles.accJobBtn} tag={job.address} variant="outline-success" onClick={handleDirectionsClick}>Click Here For Directions</Button>{' '}
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}