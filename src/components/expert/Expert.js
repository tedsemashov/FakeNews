import React from "react";
import Spinner from "react-bootstrap/Spinner";

import Header from '../header/index';
import Subheader from '../subheader/index';
import TimeDropdown from '../subheader/time-dropdown/TimeDropdown';
import Breadcrumbs from '../breadcrumbs';

import './expert.css';

export default class Expert extends React.Component {
  breadcrumbs = [
    { title: "Expert", link: "/expert", active: true }
  ];

  spinner = (
    <div className="spinnerWrapper">
      <Spinner animation="border" role="status" variant="dark" />
    </div>
  );

  constructor(props) {
    super(props);

    this.state = { togglePeriod: false };

    this.toggleTimePeriod = this.toggleTimePeriod.bind(this);
    this.onTimePeriodSelect = this.onTimePeriodSelect.bind(this);
  }

  componentDidMount() {
    this.props.getExpertsData();
  }

  toggleTimePeriod() {
    const togglePeriod = !this.state.togglePeriod;

    this.setState({ togglePeriod });
  }

  onTimePeriodSelect(arg) {
    // TBD; sync w/ date range filter;
    console.log(arg);
  }

  renderTimePeriodDropdown() {
    if(!this.state.togglePeriod) return null;

    return (
      <div className="timeDropdownWrapper">
        <TimeDropdown toogleTimePeriod={this.toggleTimePeriod} onTimePeriodSelect={this.onTimePeriodSelect} />
      </div>
    );
  };

  render() {
    const { isLoaded } = this.props;

    return (
      <div className="expert-page">
        {!isLoaded && this.spinner}

        <Header />

        <Subheader onClick={this.toggleTimePeriod} />
        <div className="dropdownWrapper">{this.renderTimePeriodDropdown()}</div>
        <section className="topWrapper">
          <div className="markFake">
            <div>
              <Breadcrumbs breadcrumbs={this.breadcrumbs} />

              <h1 className="main-title">Mark the fake</h1>
            </div>

            <div>
              {JSON.stringify(this.props.fakeNewsUsers)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
