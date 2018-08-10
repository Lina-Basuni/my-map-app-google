import React from "react"
import { compose, withProps } from "recompose"

import { withScriptjs,withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={6.2}
    defaultCenter={{ lat: 26.820553, lng: 30.802498 }}
  >
  <Marker
  className="Abu-Simbel"
  position={{ lat: 22.337232, lng: 31.625799 }}
  />
  <Marker
  className="Karnak-Temples"
  position={{ lat: 25.718835, lng: 32.65727 }}
  />
  <Marker
  className="Luxor-Temple"
  position={{ lat: 25.699502, lng: 32.639051 }}
  />
  <Marker
  className="Edfu-Temple"
  position={{ lat: 24.977929, lng: 32.87337 }}
  />
  <Marker
  className="Phiale-Temple"
  position={{ lat: 24.025171, lng: 32.884643 }}
  />
  <Marker
  className="Kom-Ombo-Temple"
  position={{ lat: 24.452133, lng: 32.928432  }}
  />
  </GoogleMap>
))
export default Map;
