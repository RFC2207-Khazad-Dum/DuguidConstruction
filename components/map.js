import React, { useMemo, useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Geocode from 'react-geocode';

export default function Map({ jobs }){
  const [coordinates, setCoordinates] = React.useState([{ lat: 39.0473, lng: -95.6752 }]);
  const [addresses, setAddresses] = React.useState([]);
  const [count, setCount] = React.useState(1);

  const center = useMemo(() => ({ lat: 39.0473, lng: -95.6752 }), [])

  const iconPic = 'https://openclipart.org/image/50px/27069';

  console.log('incoming jobs:', jobs);
  console.log('held coordinates:', coordinates);

  useEffect(() => {
    // Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    // console.log('first wave of jobs:', jobs);
    // let temp = coordinates;
    // jobs.map((job) => {
    //   Geocode.fromAddress(`${job.address1} + ${job.city}`)
    //   .then((res) => {
    //     console.log('these are coordinates', res);
    //     const lat = res.results[0].geometry.location.lat;
    //     const lng = res.results[0].geometry.location.lng;
    //     temp.push({lat: lat, lng: lng})
    //     })
    //   .then(() => setCoordinates(temp))
    //   .catch((err) => console.log(err));
    //   })

  }, [jobs])
  console.log(jobs);
  return (
    // Important! Always set the container height explicitly
      <GoogleMap
        zoom={11}
        center={center}
        mapContainerClassName={styles.map}
      >
          <MarkerF
          key={center.lat}
          position={center}
          // icon={iconPic}
          />
        {jobs.map((job, index) => (
            <MarkerF
            key={index}
            position={job.coordinates ? {lat: parseFloat(job.coordinates.lat), lng: parseFloat(job.coordinates.lng)} : null}
            // icon={iconPic}
            />
        ))}
      </GoogleMap>
  );
}


