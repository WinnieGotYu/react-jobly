import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./JoblyApi";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        photo_url: "",
        passwordAuth: ""
      },
      updated: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    if (localStorage.getItem("_token")) {
      let user = await JoblyApi.getUser();
      this.setState({ user });
    }
  }

  handleChange(evt) {
    this.setState({ user: { ...this.state.user, [evt.target.name]: evt.target.value } });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let { first_name, last_name, email, photo_url } = this.state.user
    await this.props.editUser({ first_name, last_name, email, photo_url });
    this.setState({ updated: !this.state.updated })
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <form onSubmit={this.handleSubmit}>
            <h2>Username: {this.props.currUser.username}</h2>
            <br></br>
            <label htmlFor="first-name">First Name: </label>
            <br></br>
            <input
              value={this.state.user.first_name}
              id="first-name"
              name="first_name"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="last-name">Last Name: </label>
            <br></br>
            <input
              value={this.state.user.last_name}
              id="last-name"
              name="last_name"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="email">Email: </label>
            <br></br>
            <input
              value={this.state.user.email}
              id="email"
              name="email"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="photo-url">Photo Url: </label>
            <br></br>
            <input
              value={this.state.user.photo_url}
              id="photo-url"
              name="photo_url"
              type="text"
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="password-auth">Re-enter Password </label>
            <br></br>
            <input
              value={this.state.passwordAuth}
              id="password-auth"
              name="passwordAuth"
              type="password"
              onChange={this.handleChange}
            />
            <br></br>
            {this.state.updated ? (<div className="alert alert-success" role="alert">
              User Updated Successfully!</div>) : null}
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
