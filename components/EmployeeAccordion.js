import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmployeeJobItem from './EmployeeJobItem';
import styles from '../styles/EmployeeAcc.module.css';

export default function EmployeeAcc() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getAllJobs')
      .then((response) => setJobs(response.data))
      .catch((err) => console.error(err));
  }, [jobs]);

  return (
    <div>
      {jobs.map((job, index) => (
        <EmployeeJobItem key={index} job={job}/>
      ))}
    </div>
  )
};