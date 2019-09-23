import React, { Component } from 'react';

import Header from '../header/index';
import Subheader from '../subheader/index';
import Spinner from "../spinner/Spinner";
import Hashtags from '../hashtags';
import TrollsActivity from '../trolls-activity'
import TopNews from '../top-news/index';
import TopRetweetedNews from '../top-retweeted-news/index';
import TopManipulativeRetweets from '../top-manipulative-retweets/index';
import TopManipulativeNews from '../top-manipulative-news/index';
import TopInfluencers from '../top-influencers/index';
import TopFavoritedUsers from '../top-favorited-users/index';
import TopTrolls from '../top-trolls/index';
import TopMentionedUsers from '../top-mentioned-users/index';
import Footer from '../footer/Footer';
import { setDocumentTitle } from '../meta';
import TopTrollsMentioned from "./../top-trolls-mentioned";
import TopMentionedUsersInRetweets from "../top-mentioned-users-in-retweets";

import "./analytics.css";

export default class Analytics extends Component {
  componentDidMount() {
    const { period, keyword } = this.props;

    this.props.getTwitterData(period, keyword);
  }

  render() {
    const { isLoaded, location } = this.props;

    return (
      <div className="analytics-page">
        {setDocumentTitle("Analytics")}

        {!isLoaded && <Spinner/>}

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
            <TopFavoritedUsers />
          </div>

          <div className="influencersTrollsMentionedWrapper">
            <TopMentionedUsers />
          </div>

          <div className="influencersTrollsMentionedWrapper">
            <TopMentionedUsersInRetweets />
          </div>
        </section>

        <TrollsActivity/>

        <section className="topWrapper">
          <div className="topManipulativeNewsWrapper">
            <div className="topNewsWrapper">
              <TopManipulativeNews />
            </div>

            <div className="topNewsWrapper">
              <TopManipulativeRetweets />
            </div>
          </div>

          <div className="influencersTrollsMentionedWrapper">
            <TopTrolls />
          </div>

          <div className="influencersTrollsMentionedWrapper">
            <TopTrollsMentioned />
          </div>
        </section>

        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }
}
