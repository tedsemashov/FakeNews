import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Header from '../header/index';
import Subheader from '../subheader/index';
import Hashtags from '../hashtags';
import TopNews from '../top-news/index';
import TopRetweetedNews from '../top-retweeted-news/index';
import TopInfluencers from '../top-influencers/index';
import TopTrolls from '../top-trolls/index';
import TopMentionedUsers from '../top-mentioned-users/index';
import Footer from '../footer/Footer';
import { setDocumentTitle } from '../meta';
import TopMentionedUsersInRetweets from "../top-mentioned-users-in-retweets";

import "./analytics.css";

export default class Analytics extends Component {
  spinner = (
    <div className="spinnerWrapper">
      <Spinner animation="border" role="status" variant="dark" />
    </div>
  );

  componentDidMount() {
    const { period, keyword } = this.props;

    this.props.getTwitterData(period, keyword);
  }

  render() {
    const { isLoaded, location } = this.props;

    return (
      <div className="analytics-page">
        {setDocumentTitle("Analytics")}

        {!isLoaded && this.spinner}

        <Header location={location}/>

        <Subheader onFilterChange={this.props.onFilterChange}/>

        <Hashtags />

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

          <div className="influencersMentionedWrapper">
            <TopMentionedUsersInRetweets />
          </div>
        </section>

        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}
