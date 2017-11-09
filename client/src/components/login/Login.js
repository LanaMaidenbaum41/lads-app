import React, { Component } from 'react';
import LoginNav from './LoginNav.js';
import LoginBox from './LoginBox.js';
import './login.css'
// import Background from './background.jpg' 


class Login extends Component {


  render() {
    return (
      <div className="Login">
        
        <LoginNav />
        <LoginBox />
      </div>
    )
  }
}




export default Login;
