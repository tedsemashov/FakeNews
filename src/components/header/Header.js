import React from 'react';
import './header.css';

const Header = ({ user }) => {
  const userLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <header className="headerContainer">
      <div className="headerWrapper">
        <img className="headerLogo" src={require('../../images/header/logo@3x.png')} />
        <nav className="navMenu">
          <ul className="headerList">
            <li className="headerLI">
              <a href="/analytics">ANALYTICS</a>
            </li>
            <li>
              <a href="/reports">REPORTS</a>
            </li>
            <li>
              <a href="/manage">MANAGE</a>
            </li>
          </ul>
        </nav>
        <div className="userLogin">
          <p className="userName">
            {user.name} {user.surname}
          </p>
          <div onClick={userLogout} className="userLogoWrapper">
            <img
              className="userLogo"
              src={require('../../images/header/Steven_Hallam-slide.jpg')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
