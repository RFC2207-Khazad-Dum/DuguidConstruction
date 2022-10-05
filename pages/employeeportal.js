import { React, useRef, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import EmployeeAcc from '../components/EmployeeAccordion';
import EmployeeScheduleTable from '../components/EmployeeTableSchedule';
import Map from '../components/map';
import styles from '../styles/EmployeePortal.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Employees() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getAllJobs')
      .then((response) => setJobs(response.data))
      .catch((err) => console.error(err));
  }, [jobs]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const location = {
    lat: 44,
    lng: -80,
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Duguid Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.image}>
        <img className={styles.happyWorkers} src="/img/happyworkers1.png"/>
        <img className={styles.happyWorkers} src="/img/happyworkers2.png"/>
        <img className={styles.happyWorkers} src="/img/happyworkers3.png"/>
      </div>
      <div>
        <div className={styles.header}>- Employee Name Here - Portal</div>
        <div className={styles.accordion}><EmployeeAcc jobs={jobs}/></div>
        <div className={styles.dataBoxes}>
          <div className={styles.directions}>
            {isLoaded ? <Map /> : <div>Loading...</div>}
          </div>
          <div className={styles.hours}>
            <EmployeeScheduleTable jobs={jobs}/>
          </div>
        </div>
      </div>
    </div>
  )
}