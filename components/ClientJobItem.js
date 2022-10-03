import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/Jobs.module.css'

const job = {
  title: "Broken Toilet",
  address: "1234 N Main St, Somewhere, KS 12345",
  client: "Adam Polk",
  assignedEmployee: "Jacob Gramer",
  media: "Some Images",
  description: "My toilet is leaking from the back. I've tried shutting off the water valve and it's still leaking.",
  categories: ['Carpentry', 'Painting', 'Plumbing', 'Electrical', 'Drywall'],
  date: "Jan 06 2019"
}

export default function ClientJobList() {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{job.title} <span className={styles.active}>Active</span>
          {job.categories.map((category) => (
            <span className={styles[category]}>{category}</span>
          ))}
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
            <b>Assigned Employee</b>: {job.assignedEmployee}
          </Typography>
          <Typography>
            <b>Attachments</b>: {job.media}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}