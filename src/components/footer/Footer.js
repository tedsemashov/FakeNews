import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <img className="FooterLogo" src={require('../../images/footer/SoftServeLogo@3x.png')} alt="SoftServe"/>
      <p>© Copyright {currentYear} SoftServe Inc.</p>
    </footer>
  );
};

export default Footer;
