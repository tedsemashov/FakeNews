import React, { Component } from 'react';
import './topInfluencers.css';
import SectionTitle from '../section-title/SectionTitle';
import InfluencerDetails from '../influencer-details/index';
import Button from '../button/Button';
import Popup from '../popup-top-accounts/index';

class TopInfluencers extends Component {
  returnInfluencersSection = () => {
    const influencersArr = Object.keys(this.props.topInfluencers).map(prop => {
      this.props.topInfluencers[prop].account = '@' + prop;
      return this.props.topInfluencers[prop];
    });
    return influencersArr;
  };

  componentDidUpdate() {
    this.returnInfluencersSection();
  }

  render() {
    const influencersArr = this.returnInfluencersSection();
    return (
      <div className="topInfluencersContainer">
        <div className="titleWrapperNews">
          <SectionTitle value="TOP INFLUENCERS" />
        </div>
        <div className="influencersWrapper">
          <div className="topInfluencersAccounts">
            {influencersArr.map(
              ({ user_name, user_profile_image_url, account, user_followers_count, user_statuses_count }) => (
                <InfluencerDetails
                  account={account}
                  name={user_name}
                  img={user_profile_image_url}
                  tweets={user_statuses_count}
                  followers={user_followers_count}
                  color={'green'}
                  key={user_statuses_count}
                />
              )
            )}
          </div>
          <div className="topUsersPopupWrapper">
            <Popup />
          </div>
        </div>
        <div className="buttonSeeAllWrapper">
          <Button value={'SEE ALL'} />
        </div>
      </div>
    );
  }
}

export default TopInfluencers;
