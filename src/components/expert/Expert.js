import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from '../header/index';
import Footer from '../footer/Footer';
import Subheader from '../subheader/index';
import TimeDropdown from '../subheader/time-dropdown/TimeDropdown';
import Breadcrumbs from '../breadcrumbs';
import TopNews from './topNews';
import TopRetweetedNews from './topRetweetedNews';
import { setDocumentTitle } from '../meta';

import TopUserTweets from "./../top-user-tweets";
import TopMentionedUsersReTweets from "./../top-mentioned-users-re-tweets";
import Manipulators from "./../manipulators";

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
        {setDocumentTitle("Expert")}
        {!isLoaded && this.spinner}

        <Header />

        <Subheader onClick={this.toggleTimePeriod} />
        <div className="dropdownWrapper">{this.renderTimePeriodDropdown()}</div>

        <div className="default-container">
          <Container>
            <Breadcrumbs breadcrumbs={this.breadcrumbs} />
            <h1 className="main-title">Mark the fake</h1>
            <TopNews/>
            <TopRetweetedNews/>
            <TopUserTweets />
            <TopMentionedUsersReTweets />
            <Manipulators />
          </Container>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}
