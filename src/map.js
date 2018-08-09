import React from "react"
import { compose, withProps } from "recompose"

import { withScriptjs,withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={6.2}
    defaultCenter={{ lat: 26.820553, lng: 30.802498 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 26.820553, lng: 30.802498 }} />}
  </GoogleMap>
))
export default Map;
