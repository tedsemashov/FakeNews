import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <img className="FooterLogo" src={require('../../images/footer/SoftServeLogo@3x.png')} alt="SoftServe" />
      <p>© Copyright 2018 SoftServe Inc.</p>
    </footer>
  );
};

export default Footer;
