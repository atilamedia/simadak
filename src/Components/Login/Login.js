import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

  postLogin = (login_data) => {
    this.props.postLogin(login_data);
  }

  render() {

    return (
      <div>
        <form className="login">
          <h1 className="login-title">Login SIMADAK</h1>
          <h5> {this.props.loginwarning} </h5>
          <input type="text" className="login-input" ref="username" placeholder="User Name" autoFocus />
          <input type="password" className="login-input" ref="password" placeholder="Password" />
          <button type="submit" className="login-button" onClick={(event) => {
            event.preventDefault()
            this.postLogin(this.refs)
          }}> Masuk  </button>
        </form>
      </div>
    );
  }
}

// <button type="submit" className="login-button"  onClick={(event) => { 
//               event.preventDefault() 
//               this.postLogin(this.refs) } }> Masuk  </button>