import React, {Component} from 'react';
import Input from '../input/index';
import Button from '../button/index'
import './login.css';

class Login extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div id='container'>
              <img className='Logo' src={require('../../images/login/logo@3x.png')}/>
              <div className='Rectangle'>
                 <p className='Log-in'>Log in</p>
                 <div className='Separator' />
                 <div className='inputWrapperEmail'>
                    <Input title={'E-mail'} placeholder={'Your e-mail address'}/>
                 </div>
                 <div className='inputWrapperPass'>
                    <Input title={'Password'} placeholder={'Your password'}/>
                 </div>
                 <div className='forgotPassContainer'>
                    <p>Forgot Password?</p>
                    <a href="">Reset password</a>
                 </div>
                 <Button/>
              </div>
           </div>
      );
   }
}

export default Login;