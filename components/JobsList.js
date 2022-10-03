import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Jobs = [
  { id: 1,
    job : 'eat the pizza',
    tools: 'many',
  },
  { id : 2,
    job: 'eat the salad',
    tools: 'fork',
  },
]

 const JobsList = function() {

  const findJobs = () => {

  }

  return (
    <div id='jobListAcc'>
      {Jobs.map((job) => (
        <div key={job.id}>
        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          >
            <Typography>
              Job {job.id}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {job.job}
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
      ))}
    </div>
  )
 }

 export default JobsList;