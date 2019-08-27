import React from 'react';
import './popupSection.css';

const PopupSection = ({ name, acc, date, tweetText }) => {
  return (
    <div className="popupSectionBlock">
      <div className="popupSectionHeader">
        <p className="popupSectionFullName">{name}</p>
        <p className="popupSectionNickDate">
          {acc} • {date}
        </p>
      </div>
      <a target="_blank" className="popupSectionTweet" href="">
        {tweetText}
      </a>
    </div>
  );
};

export default PopupSection;
