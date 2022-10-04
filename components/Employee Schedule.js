import React from 'react';
import Table from 'react-bootstrap/Table';

export default function EmployeeScheduleTable() {
  return (
    <div>
      <Table striped bordered hover>
        <thread>
          <tr>
            <th>Date</th>
            <th>Job</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Category</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>10/03/1999</td>
            <td>Plumbing</td>
            <td>Smith</td>
            <td>John</td>
            <td>Plumbing</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
};