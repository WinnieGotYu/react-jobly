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
    this.setState({
      user: { ...this.state.user, [evt.target.name]: evt.target.value }
    });
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
      <div className="container col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="btn-group">
              <button className="btn btn-primary" onClick={this.toggleRegister}>
                Login
              </button>
              <button className="btn btn-primary" onClick={this.toggleRegister}>
                Sign Up
              </button>
            </div>
            <form className="mt-3" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  onChange={this.handleChange}
                  value={this.state.user.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                  value={this.state.user.password}
                />
              </div>
              <br></br>
              {this.state.register ? (
                <div>
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                    className="form-control"
                      type="text"
                      name="first_name"
                      id="first-name"
                      onChange={this.handleChange}
                      value={this.state.user.first_name}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                    className="form-control"
                      type="text"
                      name="last_name"
                      id="last-name"
                      onChange={this.handleChange}
                      value={this.state.user.last_name}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    className="form-control"
                      type="text"
                      name="email"
                      id="email"
                      onChange={this.handleChange}
                      value={this.state.user.email}
                    />
                  </div>
                  <br></br>
                </div>
              ) : null}
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
