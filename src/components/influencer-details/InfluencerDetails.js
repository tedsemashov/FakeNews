import React from 'react';
import './InfluencerDetails.css';

const InfluencerDetails = ({ setSelectedUser, account, color, img, name, tweets, followers, fakePercent }) => {
  const convertNumbers = num => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'K'
      : Math.sign(num) * Math.abs(num);
  };

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
  }
  return (
    <div className="accountSection" onClick={setSelectedInfluencerHandler}>
      <div className="imageNameSection">
        <img className="userImage" src={img} alt="User" />
        <div className="userInformWrapper">
          <p className="userNickname">{name}</p>
          <p className="userAccount">{account}</p>
        </div>
      </div>
      <div className="buttonsSection">
        <button className="btnTweets buttonsTweetFollowers">{convertNumbers(tweets)} tweets</button>
        <button className="btnFollowers buttonsTweetFollowers">{convertNumbers(followers)} followers</button>
        <button className={`btnFakeNews ${btnColor}`}>% fake news</button>
      </div>
    </div>
  );
};

export default InfluencerDetails;
