import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps";
import Map from './map';
import logo from './logo.svg';
import Menu from './menu';
import './App.css';

class App extends Component {
  state = {
   markers: [
     {
       "id": "Abu-Simbel",
       "position":{ lat: 22.337232, lng: 31.625799 },
       "isOpen":false
     },
     {
       "id": "Karnak-Temples",
       "position":{ lat: 25.718835, lng: 32.65727 },
       "isOpen":false
     },
     {
       "id": "Luxor-Temple",
       "position":{ lat: 25.699502, lng: 32.639051 },
       "isOpen":false
     },
     {
       "id": "Edfu-Temple",
       "position":{ lat: 24.977929, lng: 32.87337 },
       "isOpen":false
     },
     {
       "id": " Phiale-Temple",
       "position":{ lat: 24.025171, lng: 32.884643 },
       "isOpen":false
     },
     {
       "id": " Kom-Ombo-Temple",
       "position":{ lat: 24.452133, lng: 32.928432  },
       "isOpen":false
     }
   ]
 }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav= ()=> {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav= ()=> {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
  }

  handleMarkerTap=(marker)=>{

    if (marker.isOpen === false) {
      marker.isOpen = true
    } else if (marker.isOpen === true) {
      marker.isOpen = false
    }
  }

  render() {
    return (

      <div className="App">
        <div id="main">
          <header className="App-header">
          <div className="menu_container">
          <Menu
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
          </div>
          <div className="App-title">My Map</div>
          </header>
          <div className="body">
            <div className="mapContainer">
            <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `590px` }} />}
            mapElement={<div style={{ height: `100%` }}/>}
            markers={this.state.markers}
            handleMarkerTap={this.handleMarkerTap}
            />
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
