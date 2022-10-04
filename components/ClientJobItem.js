import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/Jobs.module.css'

export default function ClientJobList({ job }) {
  return (
      <Accordion className={styles.job}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className={styles.jobTitle}>{job.title}</span>
          <div className={styles.tags}>
          <span className={styles.active}>Active</span>
          {job.categories.map((category) => (
            <span className={styles[category]}>{category}</span>
          ))}
          </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Description</b>: {job.description}
          </Typography>
          <Typography>
            <b>Services</b>: {job.categories.map((category, index) => {
              if (job.categories[index + 1] === undefined) {
                return category;
              } else {
                return category + ', '
              }
            })}
          </Typography>
          <Typography>
            <b>Location</b>: {job.address}
          </Typography>
          <Typography>
            <b>Assigned Employee</b>: {job.assignedEmployee || 'Awaiting assignment'}
          </Typography>
          <Typography>
            <b>Attachments</b>: {job.media}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}