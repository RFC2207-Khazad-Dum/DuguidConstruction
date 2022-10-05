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

export default function Jobs() {
  const { user, error, isLoading } = useUser();
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (user) {
    axios
      .get(`http://localhost:8080/getJobs/${user.email}`)
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
              + &nbsp;Add a Job
            </button>
            <JobModal show={show} handleClose={handleClose} email={user.email}/>
          </div>
        </>
      ) : (
        <h1 className={styles.title}>
          Please log in to view your current jobs.
        </h1>
      )}
    </>
  );
}
