import React, { Component } from 'react';
import * as constants from '../../constants';
import Input from '../input/Input';
import Button from '../button/Button';
import './login.css';
import Footer from '../footer/Footer';

class Login extends Component {
  state = {
    emailValue: '',
    passValue: '',
    emailValid: true,
    passValid: true
  };

  componentDidMount() {
    console.log(`${this.props.user.email}  ${this.props.user.password}`);
  }

  formCheck = () => {
    let email = this.props.user.email;
    let password = this.props.user.password;
    //Need to use React Router, don't hardcode JS methods
    if (email === this.state.emailValue && password === this.state.passValue) {
      localStorage.setItem('user', email);
      window.location.href = '/analytics';
    } else {
      alert('Invalid user');
    }
  };

  checkEmail = event => {
    let reg = constants.REGEXP_EMAIL;
    let result = reg.test(String(event.target.value).toLowerCase());
    result
      ? this.setState({ emailValid: true, emailValue: event.target.value })
      : this.setState({ emailValid: false, emailValue: '' });
  };

  checkPass = event => {
    let value = event.target.value;
    value === ''
      ? this.setState({ passValid: false, passValue: '' })
      : this.setState({ passValid: true, passValue: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="container">
          <img className="Logo" src={require('../../images/login/logo@3x.png')} />
          <div className="Rectangle">
            <p className="Log-in">Log in</p>
            <div className="Separator" />
            <div className="inputWrapperEmail">
              <Input
                title={'E-mail'}
                placeholder={'Your e-mail address'}
                type={'email'}
                onBlur={this.checkEmail}
                className={this.state.emailValid ? 'input' : 'inputError'}
                titleClassName={this.state.emailValid ? 'inputTitle' : 'inputTitleError'}
              />
            </div>
            <div className="inputWrapperPass">
              <Input
                title={'Password'}
                placeholder={'Your password'}
                type={'password'}
                onBlur={this.checkPass}
                className={this.state.passValid ? 'input' : 'inputError'}
                titleClassName={this.state.passValid ? 'inputTitle' : 'inputTitleError'}
              />
            </div>
            <div className="forgotPassContainer">
              <p>Forgot Password?</p>
              <a href="">Reset password</a>
              <div className="buttonWrapper">
                <Button value={'LOG IN'} onClick={this.formCheck} />
              </div>
            </div>
          </div>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
