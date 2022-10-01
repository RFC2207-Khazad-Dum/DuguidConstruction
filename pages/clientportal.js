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
    {/* <Layout> */}
    <Head>
      <title>Duguid Construction</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.jobList}>
      <ClientJobItem />
      <ClientJobItem />
      <ClientJobItem />
      <button onClick={handleShow}>Add a job</button>
      <JobModal show={show} handleClose={handleClose} />
    </div>
    {/* </Layout> */}
    </>
  )
}