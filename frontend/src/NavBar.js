import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  
  render() {
    return (
      <div>
        <NavLink exact to="/"> Jobly </NavLink>
        {this.state.isLoggedIn
          ? (<div>
            <NavLink exact to="/companies"> Companies </NavLink>
            <NavLink exact to="/jobs"> Jobs </NavLink>
            <NavLink exact to="/profile"> Profile </NavLink>
            <NavLink exact to="/"> Log Out </NavLink>
          </div>)
          : <NavLink exact to="/login"> Login </NavLink>
        }
      </div>
    );
  }
}

export default NavBar;
