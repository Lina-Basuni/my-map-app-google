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

      props.initMarkers.map(
        (marker)=>{
          const lat=marker.location.lat;
          const lng=marker.location.lng;
          return(<div key={marker.id}>
            <Marker
            title={marker.name}
            id={marker.id}
            position={{lat,lng}}
            onClick={
                (event) => {
                    props.openInfoBox(lat,lng,marker.id)
                }
            }
            animation={props.currentMarkerID===marker.id ? 1 : null}
            >
            {props.currentMarkerID===marker.id &&
              (<InfoBox
                onCloseClick={props.closeInfoBox}>
                <div style={{ backgroundColor: `#FFFFFF`, padding: `12px` }}>
                  <div style={{ fontSize: `16px`, fontColor: `#03191B` }}>
                  {marker.name}
                  </div>
                </div>
              </InfoBox>)}
            </Marker>
          </div>)
        }
      )
    }
  </div>

  </GoogleMap>
))
export default Map;
