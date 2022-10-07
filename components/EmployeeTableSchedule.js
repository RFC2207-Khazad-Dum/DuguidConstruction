import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from '../styles/table.module.css';



export default function EmployeeScheduleTable({jobs}) {
  return (
    <div className={styles.table}>
      <Table striped='columns' size='lg' bordered hover style={{backgroundColor: 'white', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle', height: '20vh', 'overflowY': 'auto', fontSize: '1.4vw'}}>
        <thead style={{backgroundColor: 'lightblue', fontSize: '1.6vw', fontWeight: '500', height: '2vh'}}>
          <tr>
            <th style={{ width: '10vw' }}>Date</th>
            <th>Job</th>
            <th>Employee</th>
            <th style={{ overflowWrap: 'break-word'}}>Category</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => {
            return (
              <tr key={index}>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle'}}>{job.date.slice(0,10)}</td>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2vh', verticalAlign: 'middle'}}>{job.title}</td>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle'}}>{job.assignedEmployee}</td>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle'}}>{job.categories}</td>
              </tr>)
          })}
        </tbody>
      </Table>
    </div>

  )
};