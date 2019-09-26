import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <NavLink className="NavLink mr-4" exact to="/">
          {" "}
          Jobly{" "}
        </NavLink>
        {localStorage.getItem("_token") ? (
          <div>
            <NavLink className="NavLink mr-4" exact to="/companies">
              {" "}
              Companies{" "}
            </NavLink>
            <NavLink className="NavLink mr-4" exact to="/jobs">
              {" "}
              Jobs{" "}
            </NavLink>
            <NavLink className="NavLink mr-4" exact to="/profile">
              {" "}
              Profile{" "}
            </NavLink>
            <NavLink className="NavLink mr-4" exact to="/" onClick={this.props.logOut}>
              {" "}
              Log Out{" "}
            </NavLink>
          </div>
        ) : (
          <NavLink className="NavLink mr-4" exact to="/login">
            {" "}
            Login{" "}
          </NavLink>
        )}
      </nav>
    );
  }
}

export default NavBar;
