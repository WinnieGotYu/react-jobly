import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/"> Jobly </NavLink>
        {localStorage.getItem('_token')
          ? (<div>
            <NavLink exact to="/companies"> Companies </NavLink>
            <NavLink exact to="/jobs"> Jobs </NavLink>
            <NavLink exact to="/profile"> Profile </NavLink>
            <NavLink exact to="/" onClick={this.props.logOut}> Log Out </NavLink>
          </div>)
          : <NavLink exact to="/login"> Login </NavLink>
        }
      </div>
    );
  }
}

export default NavBar;
