import React, {Component} from 'react';
import './popup.css';
import PopupSection from './popup-section/index'
import TopInfluencersSection from "../top-influencers/top-influencers-section/TopInfluencersSection";

class Popup extends Component {

   componentDidMount() {

   };

   render() {
      const selected = this.props.selectedInfluencer.substr(1);
      const currentTweets = this.props.topInfluencers[selected].top_tweets;
      return (
           <div className='popupContainer'>
              <div className='popupContentWrapper'>
                 <div className='popupHeader'>

                 </div>
                 <p className='topTweetsLabel'>TOP TWEETS</p>
                 <div className='popupTweetsContainer'>
                    {
                       currentTweets.map(({text, date, user_name}) =>
                            <PopupSection
                                 tweetText={text}
                                 date={date}
                                 name={user_name}
                                 acc={selected}
                            />
                       )
                    }
                 </div>
              </div>
           </div>
      );
   }
}

export default Popup;