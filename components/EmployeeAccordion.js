import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmployeeJobList from './EmployeeJobItem';
import styles from '../styles/EmployeeAcc.module.css';

const dummyData = {
  employees: [
    {
      title: 'rebuild treehouse',
      address: '221 Baker St',
      client: 'Henry',
      assignedEmployee: 'JGramer',
      media: 'none',
      description: 'we are rebuilding a treehouse',
      categories: ['Carpentry', 'Exterior'],
      date: '02/24/1993',
      },
    {
      title: 'fix garage sink',
      address: 'Midtown',
      client: 'Jill',
      assignedEmployee: 'TWhite',
      media: 'none',
      description: 'the sink is clogged please halp!!!',
      categories: ['Plumbing'],
      date: '01/12/1234',
      },
    {
      title: 'rebuild driveway',
      address: 'Casa Blanc',
      client: 'Mary',
      assignedEmployee: 'SDuran',
      media: 'none',
      description: 'cannot drive, make drive workie',
      categories: ['Demolition', 'Masonry'],
      date: '12/25/1245',
      },
  ]
};

export default function EmployeeAcc() {

  return (
    <div>
      {dummyData.employees.map((job) => (
        <EmployeeJobList key={job.address} job={job}/>
      ))}
    </div>
  )
};