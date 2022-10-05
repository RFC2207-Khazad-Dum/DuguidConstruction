import React from 'react';
import Table from 'react-bootstrap/Table';

const dummyData = {
  jobs: [
    {
      date: '10/01/99',
      job: 'fix fence',
      lastName: 'johnson',
      firstName: 'james',
      category: 'structure'
    },
    {
      date: '10/02/99',
      job: 'fix pipe',
      lastName: 'brown',
      firstName: 'boe',
      category: 'plumbing'
    },
    {
      date: '10/03/99',
      job: 'fix light',
      lastName: 'mcginnis',
      firstName: 'mary',
      category: 'electrical'
    },
    {
      date: '10/04/99',
      job: 'fix AC',
      lastName: 'allison',
      firstName: 'alice',
      category: 'hvac'
    },
    {
      date: '10/05/99',
      job: 'fix flooring',
      lastName: 'peterson',
      firstName: 'ben',
      category: 'flooring'
    },
    {
      date: '10/01/99',
      job: 'fix fence',
      lastName: 'johnson',
      firstName: 'james',
      category: 'structure'
    },
    {
      date: '10/02/99',
      job: 'fix pipe',
      lastName: 'brown',
      firstName: 'boe',
      category: 'plumbing'
    },
    {
      date: '10/03/99',
      job: 'fix light',
      lastName: 'mcginnis',
      firstName: 'mary',
      category: 'electrical'
    },
    {
      date: '10/04/99',
      job: 'fix AC',
      lastName: 'allison',
      firstName: 'alice',
      category: 'hvac'
    },
    {
      date: '10/05/99',
      job: 'fix flooring',
      lastName: 'peterson',
      firstName: 'ben',
      category: 'flooring'
    },
    {
      date: '10/01/99',
      job: 'fix fence',
      lastName: 'johnson',
      firstName: 'james',
      category: 'structure'
    },
    {
      date: '10/02/99',
      job: 'fix pipe',
      lastName: 'brown',
      firstName: 'boe',
      category: 'plumbing'
    },
    {
      date: '10/03/99',
      job: 'fix light',
      lastName: 'mcginnis',
      firstName: 'mary',
      category: 'electrical'
    },
    {
      date: '10/04/99',
      job: 'fix AC',
      lastName: 'allison',
      firstName: 'alice',
      category: 'hvac'
    },
    {
      date: '10/05/99',
      job: 'fix flooring',
      lastName: 'peterson',
      firstName: 'ben',
      category: 'flooring'
    },
  ]
}
export default function EmployeeScheduleTable() {
  return (

      <Table striped bordered hover style={{backgroundColor: 'white', height: '5vh', 'overflow-x': 'hidden', 'overflow-y': 'auto'}}>
        <thead style={{backgroundColor: 'lightblue'}}>
          <tr>
            <th>Date</th>
            <th>Job</th>
            <th>Name: Last, First</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.jobs.map((job, index) => {
            return (
              <tr key={index}>
                <td>{job.date}</td>
                <td>{job.job}</td>
                <td>{`${job.lastName}, ${job.firstName}`}</td>
                <td>{job.category}</td>
              </tr>)
          })}
        </tbody>

      </Table>

  )
};