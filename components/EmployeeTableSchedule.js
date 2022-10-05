import React from 'react';
import Table from 'react-bootstrap/Table';



export default function EmployeeScheduleTable({jobs}) {
  return (

      <Table striped bordered hover style={{backgroundColor: 'white', height: '5vh', 'overflow-x': 'hidden', 'overflow-y': 'auto'}}>
        <thead style={{backgroundColor: 'lightblue'}}>
          <tr>
            <th>Date</th>
            <th>Job</th>
            <th>Employee</th>
            <th>Category</th>
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