import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import NavBar from "./NavBar";
import JoblyApi from "./JoblyApi";
import jwt from "jsonwebtoken";
//decode token grab username 
//set state with username 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
    if (localStorage.getItem("_token")) {
      let payload = jwt.decode(localStorage.getItem("_token"));
      this.state.currentUser = { username: payload.username};
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.editUser = this.editUser.bind(this)
  }

  async componentDidMount() {
    if (localStorage.getItem("_token")) {
      let user = await JoblyApi.getUser();
      this.setState({ currentUser: user });
    }
  }

  async handleLogin(res, username) {
    localStorage.setItem("_token", res.token);
    localStorage.setItem("username", username);
    let user = await JoblyApi.getUser();
    this.setState({ currentUser: user });
  }

  handleLogout() {
    localStorage.clear();
    this.setState({ currentUser: {} });
  }

  async editUser(userData) {
    let user = await JoblyApi.editUser(userData);
    this.setState(st => ({ 
      currentUser: {...st.currentUser, ...user.user}
    }));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar
            logOut={this.handleLogout}
            isLoggedIn={!!this.state.currentUser.username}
          />
          <Routes
            isLoggedIn={!!this.state.currentUser.username}
            currUser={this.state.currentUser}
            handleLogin={this.handleLogin}
            editUser={this.editUser}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
