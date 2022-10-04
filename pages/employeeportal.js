import { React, useRef, useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import EmployeeAcc from '../components/EmployeeAccordion';
import EmployeeScheduleTable from '../components/EmployeeTableSchedule';
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
        <div className={styles.accordion}><EmployeeAcc /></div>
        <div className={styles.dataBoxes}>
          <div className={styles.directions}>
            {isLoaded ? <Map /> : <div>Loading...</div>}
          </div>
          <div className={styles.hours}>
            <EmployeeScheduleTable />
          </div>
        </div>
      </div>
    </div>
  )
}