import React from "react";
import { Redirect } from "react-router";

import Input from '../input/Input';
import Button from '../button/Button';
import Footer from '../footer/Footer';

import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      valid: true
    };

    this.submit = this.submit.bind(this);
    this.autoSubmit = this.autoSubmit.bind(this);
  }

  componentDidMount() {
    console.log("User:", this.props.user.email, this.props.user.password);
  }

  submit() {
    const { user } = this.props;
    const { email, password } = this.state;

    const valid = email === user.email && password === user.password;

    // refresh;
    this.setState({ valid }, () => {
      // log in user;
      if(valid) this.props.loginUser(user);
    });
  };

  autoSubmit(event) {
    if(event.which === 13) this.submit();
  }

  render() {
    if(this.props.userLoggedIn) return(<Redirect to={{pathname: "/analytics"}} />);
    const { email, password, valid } = this.state;

    return (
      <div>
        <div id="container">
          <img className="Logo" src={require('../../images/login/logo@3x.png')} alt="Log in" />
          <div className="Rectangle">
            <p className="Log-in">Log in</p>
            <div className="Separator" />
            <div className="inputWrapperEmail">
              <Input
                title={'E-mail'}
                placeholder={'Your e-mail address'}
                type={'email'}
                className={valid ? 'input' : 'inputError'}
                titleClassName={valid ? 'inputTitle' : 'inputTitleError'}
                value={email}
                onChange={(event) => { this.setState({ email: event.target.value }) }}
                onKeyPress={this.autoSubmit}
              />
            </div>
            <div className="inputWrapperPass">
              <Input
                title={'Password'}
                placeholder={'Your password'}
                type={'password'}
                value={password}
                className={valid ? 'input' : 'inputError'}
                titleClassName={valid ? 'inputTitle' : 'inputTitleError'}
                onChange={(event) => { this.setState({ password: event.target.value }) }}
                onKeyPress={this.autoSubmit}
              />
            </div>
            <div className="forgotPassContainer">
              <p>Forgot Password?</p>
              <a href="#reset-password">Reset password</a>
              <div className="buttonWrapper">
                <Button value="LOG IN" onClick={this.submit} />
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
