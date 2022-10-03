import React, { useMemo } from "react";
import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ listOfMarkers }){
  const center = useMemo(() => ({ lat: 38.8977, lng: -77.0365 }), [])
  return (
    // Important! Always set the container height explicitly
      <GoogleMap
        zoom={8}
        center={center}
        mapContainerClassName={styles.map}
      >
        <MarkerF
        key={center.lat}
        position={center}
         />
      </GoogleMap>
  );
}


