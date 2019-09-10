import React, { Component } from 'react';
import './analytics.css';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../header/index';
import Subheader from '../subheader/index';
import TimeDropdown from '../subheader/time-dropdown';
import Hashtags from '../hashtags/Hashtags';
import TrollsActivity from '../trolls-activity/index';
import TopNews from '../top-news/index';
import TopRetweetedNews from '../top-retweeted-news/index';
import TopInfluencers from '../top-influencers/index';
import TopTrolls from '../top-trolls/index';
import TopMentionedUsers from '../top-mentioned-users/index';
import Footer from '../footer/Footer';
import { setDocumentTitle } from '../meta';

class Analytics extends Component {
  state = {
    timePeriod: false
  };

  componentDidMount() {
    this.props.getTwitterData();
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
          <TimeDropdown toogleTimePeriod={this.toggleTimePeriod} onTimePeriodSelect={this.props.getTwitterData} />{' '}
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
        {setDocumentTitle("Analytics")}
        {!this.props.isLoaded && false ? spinner : null}
        <Header />
        <Subheader onClick={this.toggleTimePeriod} />
        <div className="dropdownWrapper"> {this.showTimePeriodDropdown()} </div> <Hashtags />
        <TrollsActivity />
        <section className="topWrapper">
          <div className="topAllNewsWrapper">
            <div className="topNewsWrapper">
              <TopNews />
            </div>
            <div className="topNewsWrapper">
              <TopRetweetedNews />
            </div>
          </div>
          <div className="influencersTrollsMentionedWrapper">
            <TopInfluencers />
          </div>
          <div className="influencersTrollsMentionedWrapper">
            <TopTrolls />
          </div>
          <div className="influencersMentionedWrapper">
            <TopMentionedUsers />
          </div>
        </section>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Analytics;
