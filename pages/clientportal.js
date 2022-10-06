import React, { useState, useEffect } from "react";
import Script from 'next/script'
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Layout from "../components/Layout";
import JobModal from "../components/JobModal";
import ClientJobItem from "../components/ClientJobItem";
import styles from "../styles/Jobs.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ContactUs from '../components/ContactUs.js';

export default function Jobs() {
  const { user, error, isLoading } = useUser();
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);
  console.log(user);
  useEffect(() => {
    if (user) {
    axios
      .get(`http://ec2-18-221-69-122.us-east-2.compute.amazonaws.com:8080/getJobs/${user.email}`)
      .then((response) => {
        console.log(response);
        setJobs(response.data);
      })
      .catch((err) => console.log(err));
      }
  }, [show, user]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <div id={styles.image}>
          <img className={styles.worker} src="/img/construction_worker.jpeg"/>
          <img className={styles.worker} src="/img/worker2.png"/>
          <img className={styles.worker} src="/img/worker3.png"/>
        </div>
      {user ? (
        <>
        <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />
          <Head>
            <title>Duguid Construction</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.jobList}>
            <h1 className={styles.title}>
              <span className={styles.username}>{user.name}&#39;s</span> Current
              Jobs
            </h1>
            {jobs.map((job, index) => (
              <ClientJobItem key={index} job={job} />
            ))}
            <button className={styles.addJobBtn} onClick={handleShow}>
              + &nbsp;ADD A JOB
            </button>
            <JobModal show={show} handleClose={handleClose} email={user.email}/>
          </div>
        </>
      ) : (
        <div className={styles.pleaseLogIn}>
        <h1 className={styles.title}>
          Please <span className={styles.loginSpan} href="/contact">log in</span> to view your current jobs.
        </h1>
        </div>
      )}
      <ContactUs/>
    </>
  );
}
