import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { mergeClasses } from '@material-ui/styles';


const Map = () => {

    const coords = { lat: 0, lng: 0 };

    return (
        <div className={mergeClasses.mapContainer}>
            <GoogleMapReact
                //bootstrapURLKeys={{ key: <GoogleAPIKey> }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            // onChange={(e) => {
            //     setCoords({ lat: e.center.lat, lng: e.center.lng });
            //     setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            // }}
            // onChildClick={(child) => setChildClicked(child)}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;