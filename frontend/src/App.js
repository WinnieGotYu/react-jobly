import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import NavBar from "./NavBar";
import JoblyApi from './JoblyApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('_token')) {
      let user = await JoblyApi.getUser();
      this.setState({ currentUser: user})
    }
  }

  async handleLogin(res, username) {
    console.log("before login", this.state);
    localStorage.setItem('_token', res.token)
    localStorage.setItem('username', username);
    if (localStorage.getItem('_token')) {
      let user = await JoblyApi.getUser();
      this.setState({ currentUser: user, isLoggedIn: true })
    }
    console.log("after login", this.state);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes handleLogin={this.handleLogin}/>
        </BrowserRouter>
      </div>
    );
  }  
}

export default App;
