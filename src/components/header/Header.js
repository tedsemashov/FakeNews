import React from 'react';
import { Link } from "react-router-dom";

import { Logo } from "../images/Logo"

import './header.css';

const Header = ({ user }) => {
  // TBD: move this to state; logout thru dispatcher;
  const userLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

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
          <div onClick={userLogout} className="userLogoWrapper">
            <img className="userLogo" src={require('../../images/header/Steven_Hallam-slide.jpg')} alt='user-logo' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
