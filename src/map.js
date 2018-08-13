import React from "react"
import { compose, withProps , withStateHandlers } from "recompose"

import { withScriptjs,withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";


const Map = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={6.2}
    defaultCenter={{ lat: 26.820553, lng: 30.802498 }}
  >
  <div className="markers-container">

    {

      props.markers.map(
        (marker)=>(
          <div key={marker.id}>
            <Marker
            title={marker.id}
            id={marker.id}
            position={marker.position}
            onClick={
                (event) => {
                    props.openInfoBox(marker.id)
                }
            }
            >
            {props.currentMarkerID===marker.id &&
              (<InfoBox
              onCloseClick={props.closeInfoBox}>
                <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                  <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                  {marker.id}
                  </div>
                </div>
              </InfoBox>)}
            </Marker>
          </div>
        )
      )
    }
  </div>

  </GoogleMap>
))
export default Map;
