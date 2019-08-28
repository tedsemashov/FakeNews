import React from 'react';
import './InfluencerDetails.css';

const InfluencerDetails = ({ setSelectedInfluencer, account, color, img, name, tweets, followers }) => {
  const convertNumbers = num => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'K'
      : Math.sign(num) * Math.abs(num);
  };

  const setSelectedInfluencerHandler = () => {
    setSelectedInfluencer(account);
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
  return (
    <div className="accountSection" onClick={setSelectedInfluencerHandler}>
      <div className="imageNameSection">
        <img className="userImage" src={img} />
        <div className="userInformWrapper">
          <p className="userNickname">{name}</p>
          <p className="userAccount">{account}</p>
        </div>
      </div>
      <div className="buttonsSection">
        <button className="btnTweets buttonsTweetFollowers">{convertNumbers(tweets)} tweets</button>
        <button className="btnFollowers buttonsTweetFollowers">{convertNumbers(followers)} followers</button>
        <button className={`btnFakeNews ${btnColor}`}>90% fake news</button>
      </div>
    </div>
  );
};

export default InfluencerDetails;
