import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import styles from '../styles/table.module.css';
import Button from 'react-bootstrap/Button';
import ToolListModal from './ToolListModal';

export default function EmployeeScheduleTable({jobs}) {
  const [show, setShow] = useState(false);
  const [tools, setTools] = useState([]);
  const [task, setTask] = useState({});

  const handleClose = () => {
    setTools([]);
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    let temp = [];
    let job = JSON.parse(e.target.value);
    job.categories.map(cat => {
      axios.get(`http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/tools/${cat}`)
        .then((res) => {
          res.data[0].tools.forEach(tool => {
            if (temp.indexOf(tool) === -1) temp.push(tool);
          });
          setTools(temp);
          setTask(job);
        })
        .catch((err) => console.error(err));
    })
    handleShow();
  }

  return (
    <div className={styles.table}>
      <Table striped='columns' size='lg' bordered hover style={{backgroundColor: 'white', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle', height: '20vh', 'overflowY': 'auto', fontSize: '1.4vw'}}>
        <thead style={{backgroundColor: 'lightblue', fontSize: '1.6vw', fontWeight: '500', height: '2vh'}}>
          <tr>
            <th style={{ width: '10vw' }}>Date</th>
            <th>Job</th>
            <th>Employee</th>
            <th style={{ overflowWrap: 'break-word'}}>Tools Needed</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => {
            return (
              <tr key={index}>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle'}}>{job.date.slice(0,10)}</td>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2vh', verticalAlign: 'middle'}}>{job.title}</td>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle'}}>{job.assignedEmployee}</td>
                <td style={{fontSize: '1.1vw', textAlign: 'center', lineHeight: '2.5vh', verticalAlign: 'middle'}}>
                  <Button variant="outline-success" value={JSON.stringify(job)} onClick={handleClick}>
                    Tools
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <ToolListModal show={show} tools={tools} task={task} handleClose={handleClose}/>
      </Table>
    </div>

  )
};