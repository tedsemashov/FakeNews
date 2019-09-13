import React from "react";
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import InfluencerDetails from '../influencer-details/InfluencerDetails';
import Button from '../button/Button';
import Popup from '../popup-top-accounts/Popup';
import NoData from "./../no-data/NoData";

import './topInfluencers.css';

export default class TopInfluencers extends React.Component {
  convertUser = (userData, user) => {
    return {
      ...userData,
      account: _.startsWith(user, "@") ? user : `@${user}`
    };
  };

  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
  }

  renderContent(users) {
    // TBD: add correct Fakeness %
    return(
      <React.Fragment>
        <div className="topInfluencersAccounts">
          {users.map(({ user_name, user_profile_image_url, account, user_followers_count, user_statuses_count }) => (
              <InfluencerDetails
                account={account}
                name={user_name}
                img={user_profile_image_url}
                tweets={user_statuses_count}
                followers={user_followers_count}
                color={'green'}
                key={user_statuses_count}
                setSelectedUser={this.props.setSelectedInfluencer}
              />
            )
          )}
        </div>
        <div className="topUsersPopupWrapper">
          <Popup users={this.props.topInfluencers} selectedInfluencer={this.props.selectedInfluencer} />
        </div>
      </React.Fragment>
    );
  }

  render() {
    const users = _.map(this.props.topInfluencers, this.convertUser);

    return (
      <div className="topInfluencersContainer">
        <div className="titleWrapperNews">
          <SectionTitle value="TOP INFLUENCERS" />
        </div>
        <div className="influencersWrapper">
          {_.isEmpty(users) ? <NoData/> : this.renderContent(users)}
        </div>
        {
          !_.isEmpty(users) &&
          <div className="buttonSeeAllWrapper">
            <Button value={'SEE ALL'} />
          </div>
        }
      </div>
    );
  }
}
