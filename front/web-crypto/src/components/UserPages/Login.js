//Page for login to the app
import React, { Component } from 'react';
import MiniDrawer from '../BaseFront/NavBar'

class Login extends Component {
  user = {
    status : "disconnected"
  } 

  displayLoginPage(){
    return (
      <div>
        <p>coucou</p>
      </div>
    )
  }

  render() {
    if (this.user.status === "connected") {
      return (<div>

        <MiniDrawer display="connected" />
      </div>)
    }
    else {
      
      return (
        <div>        
          <h1>Welcome to the Login Page</h1>
        </div>)

    }

  }
}
export default Login