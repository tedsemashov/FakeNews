import React from 'react';
import './popup.css';
import PopupSection from './popup-section/PopupSection';
import PopupHeaderNumbers from './popup-header-numbers/PopupHeaderNumbers';

const Popup = ({ selectedInfluencer, topInfluencers }) => {
  const selected = selectedInfluencer.substr(1);
  const currentTweets = topInfluencers[selected].top_tweets;
  return (
    <div className="popupContainer">
      <div className="popupContentWrapper">
        <div className="popupHeader">
          <div className="popupProfile">
            <PopupHeaderNumbers
              numbers={'1,615'}
              descr={'PROFILE VISITS'}
              percent={'138'}
              color={'green'}
            />
          </div>
          <div className="popupProfile">
            <PopupHeaderNumbers numbers={'101'} descr={'MENTIONS'} percent={'12'} color={'red'} />
          </div>
        </div>
        <p className="topTweetsLabel">TOP TWEETS</p>
        <div className="popupTweetsContainer">
          {currentTweets.map(({ text, date, user_name, user_followers_count }) => (
            <PopupSection
              tweetText={text}
              date={date}
              name={user_name}
              acc={'@' + selected}
              key={user_followers_count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
