import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Profile extends Component {
  state = {  }
  render() { 
    return ( <div>
     { this.props.isLoggedIn ? 
     "HELLO" : <Redirect to="/login" />
    }
    </div> );
  }
}
 
export default Profile;