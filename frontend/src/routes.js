import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { isLoggedIn, currUser, handleLogin } = this.props
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/companies" render={() => <Companies isLoggedIn={isLoggedIn} currUser={currUser}/>} />
        <Route exact path="/companies/:name" render={routeProps => <Company {...routeProps} isLoggedIn={isLoggedIn} currUser={currUser}/>} />
        <Route exact path="/jobs" render={() => <Jobs isLoggedIn={isLoggedIn} currUser={currUser}/>} />
        <Route exact path="/login" render={routeProps => <Login {...routeProps} handleLogin={handleLogin}/>} />
        <Route exact path="/profile" render={() => <Profile isLoggedIn={isLoggedIn} currUser={currUser}/>} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;