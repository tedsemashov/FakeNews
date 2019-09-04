import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';
import Header from '../header/index';
import Subheader from '../subheader/index';
import TimeDropdown from '../subheader/time-dropdown/TimeDropdown';
import Breadcrumbs from '../breadcrumbs';

import './expert.css';

class Expert extends Component {
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
          <TimeDropdown toogleTimePeriod={this.toggleTimePeriod} onTimePeriodSelect={this.onTimePeriodSelect} />{' '}
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

    const breadcrumbs = [{link: '/analytics', title: 'Home'}, {title: 'Expert'}]
    return (
      <div>
        {!this.props.isLoaded ? spinner : null}
        <Header />
        <Subheader onClick={this.toggleTimePeriod} />
        <div className="dropdownWrapper"> {this.showTimePeriodDropdown()} </div>
        <section className="topWrapper">
          <div className="markFake">
           <div>
              <Breadcrumbs breadcrumbs={breadcrumbs}/>
              <h1 className='main-title'>MArk the fake</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Expert;
