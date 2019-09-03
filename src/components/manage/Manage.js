import React, { Component } from 'react';
import './manage.css';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../header/index';
import Subheader from '../subheader/index';
import TimeDropdown from '../subheader/time-dropdown/TimeDropdown';

class Manage extends Component {
  state = {
    timePeriod: false
  };

  componentDidMount() {
    this.props.getExpertsData();
  }

  toggleTimePeriod = () => {
    this.setState(state => ({
      timePeriod: !state.timePeriod
    }));
  };

  showTimePeriodDropdown = () => {
    if (this.state.timePeriod) {
      return (
        <div className="timeDropdownWrapper">
          <TimeDropdown toogleTimePeriod={this.toggleTimePeriod} />{' '}
        </div>
      );
    }
  };


  render() {
    const spinner = (
      <div className="spinnerWrapper">
        <Spinner animation="border" role="status" variant="dark" />
      </div>
    );
    return (
      <div>
        {!this.props.isLoaded ? spinner : null}
        <Header />
        <Subheader onClick={this.toggleTimePeriod} />
        <h1>Manage </h1>
        {JSON.stringify(this.props.topRtweets)}
      </div>
    );
  }
}

export default Manage;
