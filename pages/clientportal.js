import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Head from 'next/head'
import Layout from '../components/Layout'
import JobModal from '../components/JobModal'
import ClientJobItem from '../components/ClientJobItem'
import styles from '../styles/Jobs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Jobs() {
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/getAllJobs')
      .then((response) => {
        setJobs(response.data);
      })
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <Head>
      <title>Duguid Construction</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.jobList}>
      <h1 className={styles.title}><span className={styles.username}>Adams</span> Current Jobs</h1>
      {jobs.map((job, index) => (
        <ClientJobItem key={index} job={job} />
      ))}
      <button className={styles.addJobBtn} onClick={handleShow}>+ &nbsp;Add a Job</button>
      <JobModal show={show} handleClose={handleClose} />
    </div>
    </>
  )
}

