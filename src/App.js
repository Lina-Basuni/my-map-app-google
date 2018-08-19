import React, { Component } from 'react';
import Map from './map';
import Menu from './menu';
import './App.css';
import escapeRegExp from 'escape-string-regexp'
import  axios from 'axios'

class App extends Component {
  state = {
   listMarkers: [],
   initMarkers: [],
   currentMarkerID:-1,
   googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCiflduNSs_ezPtylJ_Q1p8r-ZOAXvhQmQ&v=3.exp&libraries=geometry,drawing,places",
   fourSquareURL:"https://api.foursquare.com/v2/venues/search?",
   zoom:13.5,
   center:{lat: 25.715043, lng: 32.622112},
   query:'',
   navOpen:false
  }

  componentDidMount(){
    this.getMarkers();
    this.getMap();
  }

//function to get map's URL
  getMap=()=>{
    const URL=this.state.googleMapURL;
    fetch(URL,{mode: 'no-cors'})
    .then((response)=>{
      console.log(response);
    })
    .catch((err) => {
      console.log("Error is : ", err);
    })
  }

//function to get locations from Foursquare API and set them
//to initMarkers array in the state
  getMarkers= ()=>{
    const URL = this.state.fourSquareURL;
    const params={
      client_id:"KYHC5HMNQLL5P4ZTFTXRBC0VUHZ2XMGSUCZ2M3QLN4CO1ZUO",
      client_secret:"G102FXJGMYLZZ4PSI4H1JT3BRK5API1LHNMXLDMWTZSPQEYO",
      query:"Temple",
      near:"Luxor",
      limit:"10",
      v:"20180908"
    }
    axios.get(URL+ new URLSearchParams(params))
    .then(response=>{
      console.log(response.data.response.venues);
      let markersArr=response.data.response.venues;
      this.setState({
        initMarkers:markersArr,
        listMarkers:markersArr
      })
    }).catch((err) => {
      console.log("Error is : "+err);
    })
  }

//function to handle click on marker
  openInfoBox=(lat,lng,markerID)=>{
    this.closeNav()
    this.setState({
      currentMarkerID:markerID,
      zoom:15,
      center:{lat,lng}
    })
  }

//function to handle click on close button on infoBox
  closeInfoBox=()=>{
    this.setState({
      currentMarkerID:-1,
      zoom:13.5,
      center:{lat: 25.715043, lng: 32.622112}
    })
  }

  //function to handle change of text in search box as user types
  changeQuery=(query)=>{
    this.setState({query:query})
    this.filterList(query)
  }

//function to match query typed into the search box with a marker in the
//initMarkers array and add the matching ones into the listMarkers array
  filterList=(query)=>{
    if(query){
      const match= new RegExp(escapeRegExp(query),'i')
      let sMarkers=this.state.initMarkers.filter((marker)=>match.test(marker.name))
      this.setState({listMarkers:sMarkers})
    }
    else{
      this.setState({listMarkers:this.state.initMarkers})
    }
  }

  //Set the width of the side navigation to 250px and the left margin of the page content to 250px
  openNav= ()=> {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("menuIcon").style.visibility = "hidden";
      this.setState({navOpen:true});
  }

  //Set the width of the side navigation to 0 and the left margin of the page content to 0
  closeNav= ()=> {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("menuIcon").style.visibility = "visible";
      this.setState({navOpen:false});
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
            listMarkers={this.state.listMarkers}
            openInfoBox={this.openInfoBox}
            closeInfoBox={this.closeInfoBox}
            query={this.state.query}
            changeQuery={this.changeQuery}
            filterList={this.filterList}
            navOpen={this.state.navOpen}

          />
          </div>
          <div className="App-title">Luxor Temples</div>
          </header>
          <div className="body" tabIndex='-1'>
            <div className="mapContainer" tabIndex='-1'>
            <Map
            googleMapURL={this.state.googleMapURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `590px` }} />}
            mapElement={<div style={{ height: `100%` }}/>}
            initMarkers={this.state.initMarkers}
            listMarkers={this.state.listMarkers}
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
