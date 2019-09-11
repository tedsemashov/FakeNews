import React, { Component } from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import InfluencerDetails from '../influencer-details/InfluencerDetails';
import Popup from '../popup-top-accounts/Popup';
import Button from '../button/Button';
import NoData from "./../no-data/NoData";

import './TopMentionedUsers.css';

class TopMentionedUser extends Component {
  generateTopMentionedUersList = () => {
    const usersList = Object.keys(this.props.topMentionedUsers).map(prop => {
      this.props.topMentionedUsers[prop].account = '@' + prop;
      return this.props.topMentionedUsers[prop];
    });
    return usersList;
  };

  componentDidUpdate() {
    this.generateTopMentionedUersList();
  }

  renderContent() {
    const mentionedUsersList = this.generateTopMentionedUersList();

    return(
      <React.Fragment>
        <div className="topMentionedUsersAccounts">
          {mentionedUsersList.map(
            ({ user_name, user_profile_image_url, account, user_followers_count, user_statuses_count }) => (
              <InfluencerDetails
                account={account}
                name={user_name}
                img={user_profile_image_url}
                tweets={user_statuses_count}
                followers={user_followers_count}
                color={'orange'}
                key={user_statuses_count}
                setSelectedUser={this.props.setSelectedMentionedUser}
              />
            )
          )}
        </div>
        <div className="topMentionedUsersPopup">
          <Popup users={this.props.topMentionedUsers} selectedInfluencer={this.props.selectedMentionedUser} />
        </div>
      </React.Fragment>
    );
  }

  render() {
    const mentionedUsersList = this.generateTopMentionedUersList();

    return (
      <div className="topMentionedUsersContainer">
        <div className="titleWrapperNews">
          <SectionTitle value="TOP MENTIONED USER" />
        </div>
        <div className="topMentionedUsersWrapper">
          {_.isEmpty(mentionedUsersList) ? <NoData /> : this.renderContent()}
        </div>
        {
          !_.isEmpty(mentionedUsersList) &&
          <div className="buttonSeeAllWrapper">
            <Button value={'SEE ALL'} />
          </div>
        }
      </div>
    );
  }
}

export default TopMentionedUser;
