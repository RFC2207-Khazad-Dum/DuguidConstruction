import React from 'react';
import Table from 'react-bootstrap/Table';



export default function EmployeeScheduleTable({jobs}) {
  return (

      <Table striped bordered hover style={{backgroundColor: 'white', textAlign: 'left', lineHeight: '2.5vh', verticalAlign: 'middle', height: '20vh', 'overflowY': 'auto'}}>
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
                <td>{job.date.slice(0,10)}</td>
                <td>{job.title}</td>
                <td>{job.assignedEmployee}</td>
                <td>{job.categories}</td>
              </tr>)
          })}
        </tbody>

      </Table>

  )
};