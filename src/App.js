import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps";
import Map from './map';
import logo from './logo.svg';
import Menu from './menu';
import './App.css';

class App extends Component {

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
          <h1 className="App-title">My Map</h1>
          </header>
          <div className="body">
            <div className="mapContainer">
            <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `590px` }} />}
            mapElement={<div style={{ height: `100%` }}/>}
            />
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
