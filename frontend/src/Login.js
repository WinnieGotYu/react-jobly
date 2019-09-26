import React, { Component } from "react";
import JoblyApi from './JoblyApi';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      register: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem('_token')
    let res = await JoblyApi.getToken(this.state);
    console.log("handleSubmit", res)
    localStorage.setItem('_token', res.token)
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
  }

  // async handleToken() {
  //   let res = await JoblyApi.getToken(this.state);
  //   return res;
  // }

  toggleRegister() {
    this.setState({ register: !this.state.register })
  }

  render() {
    if (localStorage.getItem('_token')) {
      return (
        <div>
          <Redirect to='/jobs'></Redirect>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.toggleRegister}>Login</button>
        <button onClick={this.toggleRegister}>Sign Up</button>
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
            value={this.state.password}
          />
          <br></br>
          {this.state.register
            ? (
              <div>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
                <br></br>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
                <br></br>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <br></br>
              </div>)
            : null}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
