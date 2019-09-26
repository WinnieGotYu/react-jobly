import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import NavBar from "./NavBar";
import JoblyApi from "./JoblyApi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
