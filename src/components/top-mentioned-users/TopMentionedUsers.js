import React, { Component } from 'react';
import './TopMentionedUsers.css';
import SectionTitle from '../section-title/SectionTitle';
import InfluencerDetails from '../influencer-details/InfluencerDetails';
import Popup from '../popup-top-accounts/Popup';
import Button from '../button/Button';

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
  render() {
    const mentionedUsersList = this.generateTopMentionedUersList();
    return (
      <div className="topMentionedUsersContainer">
        <div className="titleWrapperNews">
          <SectionTitle value="TOP MENTIONED USER" />
        </div>
        <div className="topMentionedUsersWrapper">
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
        </div>
        <div className="buttonSeeAllWrapper">
          <Button value={'SEE ALL'} />
        </div>
      </div>
    );
  }
}

export default TopMentionedUser;
