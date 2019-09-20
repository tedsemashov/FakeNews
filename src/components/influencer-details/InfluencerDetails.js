import React from 'react';
import _ from "lodash";

import { convertNumbers } from "../../utils/convertNumbers";
import { userAvatar } from "../../utils/avatar";

import './InfluencerDetails.css';

const InfluencerDetails = ({ setSelectedUser, account, color, img, name, tweets, followers, fakePercent, skipDetails }) => {

  const setSelectedInfluencerHandler = () => {
    setSelectedUser(account);
  };

  const checkBtnColor = color => {
    if (color === 'green') {
      return 'btnFakeNewsGreen';
    } else if (color === 'orange') {
      return 'btnFakeNewsOrange';
    } else {
      return 'btnFakeNewsRed';
    }
  };
  let btnColor = checkBtnColor(color);

  const fakeNewsInfo = ()=> {
    if(!fakePercent) return null;
    return(
      <button className={`btnFakeNews ${btnColor}`}>{_.round(fakePercent*100, 0)}% fake news</button>
    );
  };

  return (
    <div className="accountSection" onClick={setSelectedInfluencerHandler}>
      <div className="imageNameSection">
        {userAvatar({ user_profile_image_url: img }, { className: "userImage", alt: "User" })}
        <div className="userInformWrapper">
          <p className="userNickname">{name}</p>
          <p className="userAccount">{account}</p>
        </div>
      </div>
      {
        !skipDetails &&
        <div className="buttonsSection">
          <button className="btnTweets buttonsTweetFollowers">{convertNumbers(tweets)} tweets</button>
          <button className="btnFollowers buttonsTweetFollowers">{convertNumbers(followers)} followers</button>
          {fakeNewsInfo()}
        </div>
      }
    </div>
  );
};

export default InfluencerDetails;
