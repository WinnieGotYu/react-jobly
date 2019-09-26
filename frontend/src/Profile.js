import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",

    }
  }
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <form>
            <h2>Username: {this.props.currUser.username}</h2>
            <br></br>
            <label htmlFor="first-name">First Name: </label>
            <br></br>
            <input
              value={this.props.currUser.first_name}
              id="first-name"
              name="firstName"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="last-name">Last Name: </label>
            <br></br>
            <input
              value={this.props.currUser.last_name}
              id="first-name"
              name="firstName"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="email">Email: </label>
            <br></br>
            <input
              value={this.props.currUser.email}
              id="first-name"
              name="firstName"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            {/* <label htmlFor="photo-url">Photo Url: </label>
            <input
              value={this.props.currUser.photo_url}
              id="first-name"
              name="firstName"
              type="text"
              onChange={this.handleChange}
            /> */}
            <br></br>
            <button>Save Changes</button>
          </form>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default Profile;
