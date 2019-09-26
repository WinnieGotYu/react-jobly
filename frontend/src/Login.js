import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    //need function to get token
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
  }

  getToken() {
    //need function to get token
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br></br>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="firstName"
            id="first-name"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br></br>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="last-name"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br></br>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
