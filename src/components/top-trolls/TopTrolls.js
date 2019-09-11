import React, { Component } from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import TopTrollsWorld from './top-trolls-world/index';
import TopTrollsGender from './top-trolls-gender/index';
import TopTrollsAge from './top-trolls-age/index';
import InfluencerDetails from '../influencer-details/InfluencerDetails';
import Button from '../button/Button';
import NoData from "./../no-data/NoData";

import './topTrolls.css';

class TopTrolls extends Component {
  returnInfluencersSection = () => {
    const topInfluencers = this.props.topInfluencers;
    const influencersArr = Object.keys(topInfluencers).map(prop => {
      topInfluencers[prop].account = '@' + prop;
      return topInfluencers[prop];
    });
    return influencersArr;
  };

  renderContent() {
    const influencersArr = this.returnInfluencersSection();

    return(
      <React.Fragment>
        <div className="topTrollsSection">
          {influencersArr.map(
            ({ user_name, user_profile_image_url, account, user_followers_count, user_statuses_count }) => (
              <InfluencerDetails
                account={account}
                name={user_name}
                img={user_profile_image_url}
                tweets={user_statuses_count}
                followers={user_followers_count}
                color={'red'}
                key={user_statuses_count}
                setSelectedUser={() => console.log('TROLLS!!!')}
              />
            )
          )}
        </div>
        <div className="topTrollsSectionCharts">
          <div className="topTrollsSectionBlock">
            <div className="topTrollsCharts">
              <p className="topTrollsWorldHeader">IN THE WORLD</p>
              <TopTrollsWorld data={this.props.fakeData} />
            </div>
            <div className="topTrollsCharts">
              <p className="topTrollsWorldHeader">GENDER</p>
              <TopTrollsGender />
            </div>
          </div>
          <div className="topTrollsSectionAge">
            <p className="topTrollsAgeHeader">AGE</p>
            <TopTrollsAge />
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const influencersArr = this.returnInfluencersSection();

    return (
      <div className="topTrollsContainer">
        <div className="titleWrapperNews">
          <SectionTitle value="TOP TROLLS" />
        </div>
        <div className="topTrollsWrapper">
          {_.isEmpty(influencersArr) ? <NoData/> : this.renderContent()}
        </div>
        {
          !_.isEmpty(influencersArr) &&
          <div className="buttonSeeAllWrapper">
            <Button value={'SEE ALL'} />
          </div>
        }
      </div>
    );
  }
}

export default TopTrolls;
