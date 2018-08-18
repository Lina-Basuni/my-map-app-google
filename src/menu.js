import React, { Component } from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="menu">
        <div className="menu_icon"
        onClick={
            ()=>{
              this.props.openNav()
            }
          }>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={()=>{
            this.props.closeNav()
          }}>&times;</a>
          <div className="searchWrapper">
            <input
              type="text"
              id="mySearch"
              placeholder="Search.."
              title="Type in a category"
              value={this.props.query}
              onChange={
                (event)=>{
                  this.props.changeQuery(event.target.value)
                }
              }
              />
            <ul id="myMenu">
            {
              this.props.listMarkers.map((marker) => {
                const lat=marker.location.lat;
                const lng=marker.location.lng;
                return(
                  <a
                    href="#"
                    key={marker.id}
                    onClick={
                      ()=>(
                        this.props.openInfoBox(lat,lng,marker.id)
                      )
                    }
                  >
                    {marker.name}
                  </a>
                )
              })
            }
            </ul>
          </div>

        </div>
      </div>
    )
  }

}

export default Menu;
