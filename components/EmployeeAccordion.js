import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmployeeJobItem from './EmployeeJobItem';
import styles from '../styles/EmployeeAcc.module.css';

export default function EmployeeAcc({jobs}) {
  return (
    <div className={styles.holdsAccordion}>
      {jobs.map((job, index) => (
        <EmployeeJobItem key={index} job={job}/>
      ))}
    </div>
  )
};