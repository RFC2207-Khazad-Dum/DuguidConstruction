import { React, useRef, useState, useEffect, useMemo } from 'react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Head from 'next/head';
// import Image from'next/image';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import EmployeeAcc from '../components/EmployeeAccordion';
import JobAcc from '../components/EmployeeJobItem';
import Map from '../components/map';
import styles from '../styles/EmployeePortal.module.css';

export default function Employees() {
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
      <div>
        <div className={styles.header}>Employee Portal</div>
        <div className={styles.accordion}><JobAcc /></div>
        <div className={styles.dataBoxes}>
          <div className={styles.directions}>
            {isLoaded ? <Map /> : <div>Loading...</div>}
          </div>
          <div className={styles.hours}>
            <div>Employee Hours</div>
            <div>Assigned</div>
            <div>Schedule</div>
          </div>
        </div>
      </div>
    </div>
  )
}