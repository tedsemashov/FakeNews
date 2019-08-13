import React, {Component} from 'react';
import *as constants from '../../constants';
import { Link } from "react-router-dom";
import Input from '../input/index';
import Button from '../button/index'
import './login.css';
import Footer from "../footer/Footer";

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         emailValue: '',
         passValue: '',
         emailValid: true,
         passValid: true
      }
   }

   componentDidMount() {

   };

   formCheck = () => {
      let emailValue = this.state.emailValue;
      let passValue = this.state.passValue;
      let emailValid = this.state.emailValid;
      let passValid = this.state.passValid;

      return emailValid === true && passValid === true && emailValue !== '' && passValue !== '' ?
           <Link to='/analytics' /> :
           <Link to='/' />;
   };

   checkEmail = (event) => {
      let value = event.target.value;
      value !== '' ? this.setState({emailValue: value}) : this.setState({emailValue: ''});
      let reg = constants.REGEXP_EMAIL;
      let result = reg.test(String(event.target.value).toLowerCase());
      result ? this.setState({emailValid: true}) : this.setState({emailValid: false});
   };

   checkPass = (event) => {
      let value = event.target.value;
      value === '' ? this.setState({passValid: false, passValue: ''})
                   : this.setState({passValid: true, passValue: '*********'})
   };

   render() {
      return (
           <div>
              <div id='container'>
                 <img className='Logo' src={require('../../images/login/logo@3x.png')}/>
                 <div className='Rectangle'>
                    <p className='Log-in'>Log in</p>
                    <div className='Separator' />
                    <div className='inputWrapperEmail'>
                       <Input title={'E-mail'} placeholder={'Your e-mail address'} type={'email'}
                              onBlur={this.checkEmail}
                              className={this.state.emailValid ? 'input' : 'inputError'}/>
                    </div>
                    <div className='inputWrapperPass'>
                       <Input title={'Password'} placeholder={'Your password'} type={'password'}
                              onBlur={this.checkPass}
                              className={this.state.passValid ? 'input' : 'inputError'}/>
                    </div>
                    <div className='forgotPassContainer'>
                       <p>Forgot Password?</p>
                       <a href="">Reset password</a>
                       <div className='buttonWrapper'>
                          <Button value={'LOG IN'} onClick={this.formCheck}/>
                       </div>
                    </div>
                 </div>
              </div>
              <div className='footerWrapper'>
                 <Footer/>
              </div>
           </div>
      );
   }
}

export default Login;