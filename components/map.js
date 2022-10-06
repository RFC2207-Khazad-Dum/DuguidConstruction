import React, { useMemo, useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Geocode from 'react-geocode';

export default function Map({ listOfMarkers, jobs }){
  const [coordinates, setCoordinates] = React.useState([]);

  const center = useMemo(() => ({ lat: 39.0473, lng: -95.6752 }), [])

  const iconPic = 'https://openclipart.org/image/50px/27069';

  useEffect(() => {
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    jobs.map((job) => {
      Geocode.fromAddress(job.address1)
      .then((res) => {
        let temp = coordinates;
        temp.push({lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng})
        setCoordinates(temp);
        })
      })
  }, [jobs, coordinates])

  console.log(jobs);
  return (
    // Important! Always set the container height explicitly
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName={styles.map}
      >

          <MarkerF
          key={center.lat}
          // id={'this is the coolest part'}
          position={center}
          // onMouseOver={console.log('hovered')}
          // onClick={console.log('clicked')}
          icon={iconPic}

          />

        {coordinates.map((coordinate, index) => (
            <MarkerF
            key={index}
            // id={index}
            position={{lat: coordinate.lat, lng: coordinate.lng}}
            // onMouseOver={console.log('hovered')}
            // onClick={console.log('clicked')}
            icon={iconPic}

            />
        ))}
      </GoogleMap>
  );
}


