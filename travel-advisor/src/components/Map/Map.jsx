import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';


import useStyles from './styles.js';
import { keys } from '@material-ui/core/styles/createBreakpoints.js';
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC83TqEK0hroJQdBCBO6wIv5MwfzPNo-ew' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={' '} />

      {places?.map((place) => (
        <div
          className={classes.markerContainer}
          lat={place.latitude}

        ></div>
      ))}
    </div>
  )
}

export default Map