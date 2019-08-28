import React from 'react';
import './topInfluencers.css';
import SectionTitle from '../section-title/SectionTitle';
import TopInfluencersSection from '../top-influencers/top-influencers-section/index';
import Button from '../button/Button';
import Popup from '../popup-top-accounts/index';

const TopInfluencers = ({ topInfluencers }) => {
  const returnInfluencersSection = () => {
    const influencersArr = Object.keys(topInfluencers).map(prop => {
      topInfluencers[prop].account = '@' + prop;
      return topInfluencers[prop];
    });
    return influencersArr;
  };

  const influencersArr = returnInfluencersSection();

  return (
    <div className="topInfluencersContainer">
      <div className="titleWrapperNews">
        <SectionTitle value="TOP INFLUENCERS" />
      </div>
      <div className="influencersWrapper">
        <div className="topInfluencersAccounts">
          {influencersArr.map(
            ({ user_name, user_profile_image_url, account, user_followers_count, user_statuses_count }) => (
              <TopInfluencersSection
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
};

export default TopInfluencers;
