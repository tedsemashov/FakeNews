import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import { Logo } from "../images/Logo"

import './header.css';

// WARN: pages w/o Header will not be tracked on login/logout;
export default class Header extends React.Component {
  render() {
    const { user, userLoggedIn } = this.props;

    if(!userLoggedIn) return(<Redirect to={{ pathname: "/" }} />);

    return (
      <header className="headerContainer">
        <div className="headerWrapper">
          <Logo/>

          <nav className="navMenu">
            <ul className="headerList">
              <li className="headerLI">
                <Link to={"/analytics"}>ANALYTICS</Link>
              </li>
              <li>
                <Link to={"/reports"}>REPORTS</Link>
              </li>
              <li>
                <Link to={"/manage"}>MANAGE</Link>
              </li>
              <li>
                <Link to={"/expert"}>EXPERT</Link>
              </li>
            </ul>
          </nav>
          <div className="userLogin">
            <p className="userName">
              {user.name} {user.surname}
            </p>
            <div onClick={this.props.logOut} className="userLogoWrapper">
              <img className="userLogo" src={require('../../images/header/Steven_Hallam-slide.jpg')} alt='user-logo' />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
