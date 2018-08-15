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
       "position":{ lat: 22.337232, lng: 31.625799 }
     },
     {
       "id": "Karnak-Temples",
       "position":{ lat: 25.718835, lng: 32.65727 }
     },
     {
       "id": "Luxor-Temple",
       "position":{ lat: 25.699502, lng: 32.639051 }
     },
     {
       "id": "Edfu-Temple",
       "position":{ lat: 24.977929, lng: 32.87337 }
     },
     {
       "id": " Phiale-Temple",
       "position":{ lat: 24.025171, lng: 32.884643 }
     },
     {
       "id": " Kom-Ombo-Temple",
       "position":{ lat: 24.452133, lng: 32.928432  }
     }
   ],
   currentMarkerID:-1,
   googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
   zoom:6.2,
   center:{lat: 26.820553, lng: 30.802498},
   query:'',
   searchedMarkers:[]
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

  openInfoBox=(markerPos,markerID)=>{
    this.setState({
      currentMarkerID:markerID,
      zoom:11,
      center:markerPos
    })
  }

  closeInfoBox=()=>{
    this.setState({
      currentMarkerID:-1,
      zoom:6.2,
      center:{lat: 26.820553, lng: 30.802498 }
    })
  }
  changeQuery=(query)=>{
    this.setState({query:query})
    this.filterList(query)
  }

  filterList=(query)=>{
    if(query){
      console.log(query);
      let sMarkers=this.state.markers.filter((marker)=>{marker.id===query})
      this.setState({searchedMarkers:sMarkers})
    }
    else{
      this.setState({searchedMarkers:this.state.markers})
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
            markers={this.state.markers}
            openInfoBox={this.openInfoBox}
            closeInfoBox={this.closeInfoBox}
            query={this.state.query}
            changeQuery={this.changeQuery}
            searchedMarkers={this.searchedMarkers}
            filterList={this.filterList}

          />
          </div>
          <div className="App-title">My Map</div>
          </header>
          <div className="body">
            <div className="mapContainer">
            <Map
            googleMapURL={this.state.googleMapURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `590px` }} />}
            mapElement={<div style={{ height: `100%` }}/>}
            markers={this.state.markers}
            openInfoBox={this.openInfoBox}
            closeInfoBox={this.closeInfoBox}
            currentMarkerID={this.state.currentMarkerID}
            zoom={this.state.zoom}
            center={this.state.center}
            />
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
