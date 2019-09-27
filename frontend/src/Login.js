import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
// import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
      },
      register: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }

  handleChange(evt) {
    // this.setState( state => ({ state.user : {[evt.target.name]: evt.target.value} });
    this.setState({ user: {...this.state.user, [evt.target.name]: evt.target.value } });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    localStorage.clear();
    let isReg = this.state.register;
    if (isReg === false) {
      let res = await JoblyApi.getToken(this.state.user);
      await this.props.handleLogin(res, this.state.user.username);
    } else {
      let res = await JoblyApi.registerUser(this.state.user);
      await this.props.handleLogin(res, this.state.user.username);
    }
    this.props.history.push("/jobs");
  }

  // async handleToken() {
  //   let res = await JoblyApi.getToken(this.state);
  //   return res;
  // }

  toggleRegister() {
    this.setState({ register: !this.state.register });
  }

  render() {
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
            value={this.state.user.username}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.user.password}
          />
          <br></br>
          {this.state.register ? (
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first-name"
                onChange={this.handleChange}
                value={this.state.user.first_name}
              />
              <br></br>
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last-name"
                onChange={this.handleChange}
                value={this.state.user.last_name}
              />
              <br></br>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={this.handleChange}
                value={this.state.user.email}
              />
              <br></br>
            </div>
          ) : null}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
