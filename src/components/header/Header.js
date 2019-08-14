import React, {Component} from 'react';
import './header.css';

class Header extends Component {

   componentDidMount() {
   };

   render() {
      return (
           <header className='headerContainer'>
              <div className='headerWrapper'>
                 <img className='headerLogo' src={require('../../images/header/logo@3x.png')}/>
                 <nav className='navMenu'>
                    <ul className='headerList'>
                       <li>
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
                 <div className='userLogin'>
                     <p className='userName'>{this.props.name}</p>
                     <p className='userSurname'>{this.props.surname}</p>
                 </div>
              </div>
           </header>
      );
   }
}

export default Header;