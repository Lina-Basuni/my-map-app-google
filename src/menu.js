import React, { Component } from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="menu">
        <div className="menu_icon" id="menuIcon" tabIndex='0'
        aria-label="Menu Button"
        role="button"
        onClick={
            ()=>{
              this.props.openNav()
            }
          }
        onKeyPress={
          ()=>{
            this.props.openNav()
          }
        }
          >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div
        id="mySidenav"
        className="sidenav"
        tabIndex={this.props.navOpen?'0':'-1'}
        >
          <a href="" className="closebtn"
          tabIndex={this.props.navOpen?'0':'-1'}
          aria-label="Close Menu Button"
          role="button"
          onClick={(e)=>{
            e.preventDefault()
            this.props.closeNav()
          }}>&times;</a>
          <div className="searchWrapper">
            <input
              type="text"
              id="mySearch"
              placeholder="Search.."
              title="Type in a place"
              tabIndex={this.props.navOpen?'0':'-1'}
              aria-label="Type in a place"
              value={this.props.query}
              onChange={
                (event)=>{
                  //passin the value of the search bar to the changeQuery function
                  this.props.changeQuery(event.target.value)
                }
              }
              />
            <ul id="myMenu" tabIndex={this.props.navOpen?'0':'-1'}>
            {
              this.props.listMarkers.map((marker) => {
                const lat=marker.location.lat;
                const lng=marker.location.lng;
                return(
                  <button
                    href=""
                    key={marker.id}
                    tabIndex={this.props.navOpen?'0':'-1'}
                    aria-label="places list item"
                    onClick={
                      ()=>(
                        this.props.openInfoBox(lat,lng,marker.id)
                      )
                    }
                  >
                    {marker.name}
                  </button>
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
