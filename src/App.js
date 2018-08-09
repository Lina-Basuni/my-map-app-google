import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps";
import Map from './map';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Map</h1>
        </header>
        <body>
          <div className="mapContainer">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `590px` }} />}
              mapElement={<div style={{ height: `100%` }}/>}
            />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
