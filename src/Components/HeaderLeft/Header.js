import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
// import logo from '../../../public/src/picture/logo-mini.png'
import GambarLogo from '../img/logo-mini.png';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      userid: [],
      username: "",
      pokja: ""
    }
  }

  sendlogout = () => {
    this.props.logout()
  }


  render() {

    let navbar;

    if (this.props.username === "") {
      navbar = (
        <div className="sidebar-links">
          <Link to="/dashboard" className="link-blue"><i className="fa fa-picture-o"></i>Dashboard</Link>
          <Link to="/" className="link-green"><i className="fa fa-power-off"></i>Login </Link>
        </div>
      )
    }
    else {
      navbar = (
        <div className="sidebar-links">
          <h5 className="text-center text-primary">Selamat Datang {this.props.username} </h5>
          <h5 className="text-center text-primary">Pokja {this.props.pokja} </h5>
          <Link to="/dashboard" className="link-blue"><i className="fa fa-picture-o"></i> Dashboard </Link>
          <Link to="/Users" className="link-red"><i className="fa fa-users"></i> User Config </Link>
          <Link to="/Pokja" className="link-yellow"><i className="fa fa-file"></i> Pokja </Link>
          <Link to="/Login" className="link-green"><i className="fa fa-power-off"></i> Logout </Link>
        </div>
      )
    }

    return (
      <div>
        <aside className="sidebar-left">
          <a className="company-logo"><img src={GambarLogo} width="60px" height="70px" alt="logo zainab" /></a>
          {navbar}
        </aside>
      </div>
    );
  }
}
