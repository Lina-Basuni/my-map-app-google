import React from "react"
import { compose, withProps , withStateHandlers } from "recompose"

import { withScriptjs,withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";


const Map = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    zoom={props.zoom}
    center={props.center}
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
                    props.openInfoBox(marker.position,marker.id)
                }
            }
            
            animation={props.currentMarkerID===marker.id ? 2 : null}
            >
            {props.currentMarkerID===marker.id &&
              (<InfoBox
                onCloseClick={props.closeInfoBox}>
                <div style={{ backgroundColor: `#FFFFFF`, padding: `12px` }}>
                  <div style={{ fontSize: `16px`, fontColor: `#03191B` }}>
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
