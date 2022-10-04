import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import JobModal from '../components/JobModal'
import ClientJobItem from '../components/ClientJobItem'
import styles from '../styles/Jobs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Jobs() {
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getAllJobs')
      .then((response) => {
        console.log(response);
        setJobs(response.data);
      })
      .catch(err => console.log(err))
    }, [show])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    {/* <Layout> */}
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
    {/* </Layout> */}
    </>
  )
}
