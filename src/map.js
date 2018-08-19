import React from "react"
import { withScriptjs,withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";


const Map = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    zoom={props.zoom}
    center={props.center}
  >
  <div className="markers-container">

    {

      props.listMarkers.map(
        (marker)=>{
          const lat=marker.location.lat;
          const lng=marker.location.lng;
          const address = `${marker.location.formattedAddress[0] || ''}, ${marker.location.formattedAddress[1] || ''}, ${marker.location.formattedAddress[3] || ''}`;
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
            //animation for the marker when clicked on
            animation={props.currentMarkerID===marker.id ? 1 : null}
            >
            {props.currentMarkerID===marker.id &&
              (<InfoBox
                onCloseClick={props.closeInfoBox}>
                <div style={{ backgroundColor: `#FFFFFF`, padding: `12px` }}>
                  <div style={{ fontSize: `16px`, fontColor: `#03191B` }}>
                  {marker.name}
                  </div>
                  <h2 style={{fontSize:`14px`,fontColor:`#03191B`, fontWeight:`400`}}>
                    Address: {address}
                  </h2>
                  <h3 style={{fontSize:`12px`,fontColor:`#03191B`, fontWeight:`1`}}>
                    Data Fetched From FourSquare API
                  </h3>
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
