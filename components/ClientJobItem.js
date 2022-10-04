import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JobImage from '../components/JobImage'
import styles from '../styles/Jobs.module.css'

export default function ClientJobList({ job }) {
  return (
      <Accordion className={styles.job}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className={styles.jobTitle}>{job.title}</span><br/>
          {/* <div className={styles.tags}> */}
          {job.categories.map((category, index) => (
            <span key={index} className={styles[category]}>{category}</span>
          ))}
          {/* </div> */}
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
            <b>Attachments</b>:<br/> {job.media.map((url, index) => (
              <>
              <JobImage url={url} />
              {/* <ImageModal url={url} show={show} handleClose={handleClose} /> */}
              </>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}