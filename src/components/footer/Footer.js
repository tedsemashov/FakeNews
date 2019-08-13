import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='footerContainer'>
              <img className='FooterLogo' src={require('../../images/footer/SoftServeLogo@3x.png')}/>
              <p>© Copyright 2018 SoftServe Inc.</p>
           </div>
      );
   }
}

export default Footer;