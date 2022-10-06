import React from 'react';
import Table from 'react-bootstrap/Table';



export default function EmployeeScheduleTable({jobs}) {
  return (
      <Table striped='columns' size='lg' bordered hover style={{backgroundColor: 'white', textAlign: 'left', lineHeight: '2.5vh', verticalAlign: 'middle', height: '20vh', 'overflowY': 'auto', fontSize: '1.4vw'}}>
        <thead style={{backgroundColor: 'lightblue'}}>
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
                <td style={{fontSize: '1.1vw'}}>{job.date.slice(0,10)}</td>
                <td style={{fontSize: '1.1vw'}}>{job.title}</td>
                <td style={{fontSize: '1.1vw'}}>{job.assignedEmployee}</td>
                <td style={{fontSize: '1.1vw'}}>{job.categories}</td>
              </tr>)
          })}
        </tbody>
      </Table>

  )
};