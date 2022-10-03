import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/Jobs.module.css'


export default function ClientJobList({ job }) {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Job Title <span className={styles.active}>Active</span><span className={styles.active}>HVAC</span><span className={styles.active}>Drywall</span><span className={styles.active}>Demolition</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Description</b>: Ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
        </AccordionDetails>
      </Accordion>
  );
}