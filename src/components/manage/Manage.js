import React, { Component } from 'react';
import './manage.css';
import Header from '../header/index';

class Manage extends Component {
  state = {
    timePeriod: false,
    expertData: '',
  };

  componentDidMount() {
    this.props.getExpertsData();
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Manage </h1>
        {JSON.stringify(this.props.expertsData)}
      </div>
    );
  }
}

export default Manage;
