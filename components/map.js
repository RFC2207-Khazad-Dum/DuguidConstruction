import React, { useMemo, useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';

export default function Map({ jobs }){
  const center = useMemo(() => ({ lat: 39.0473, lng: -95.6752 }), [])

  const iconPic = 'https://openclipart.org/image/50px/27069';

  useEffect(() => {

  }, [jobs])

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


