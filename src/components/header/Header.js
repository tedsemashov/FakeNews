import React from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Logo } from "../images/Logo"

import './header.css';

export default class Header extends React.Component {
  navLink = (title, route, location) => {
    const className = classNames("headerLI", { active: route === location.pathname });

    return(
      <li key={route} className={className}>
        <Link to={route}>{title}</Link>
      </li>
    );
  };

  render() {
    const { user, location } = this.props;

    return (
      <header className="headerContainer">
        <div className="headerWrapper">
          <Logo/>

          <nav className="navMenu">
            <ul className="headerList">
              {this.navLink("ANALYTICS", "/analytics", location)}
              {this.navLink("REPORTS", "/reports", location)}
              {this.navLink("MANAGE", "/manage", location)}
              {this.navLink("EXPERT", "/expert", location)}
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
