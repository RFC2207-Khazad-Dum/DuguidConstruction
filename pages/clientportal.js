import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import JobModal from '../components/JobModal'
import ClientJobItem from '../components/ClientJobItem'
import styles from '../styles/Jobs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Jobs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <Head>
      <title>Duguid Construction</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.jobList}>
      <h1 className={styles.title}>Adam's Current Jobs</h1>
      <ClientJobItem />
      <ClientJobItem />
      <ClientJobItem />
      <button className={styles.addJobBtn} onClick={handleShow}>+ &nbsp;Add a Job</button>
      <JobModal show={show} handleClose={handleClose} />
    </div>
    </>
  )
}