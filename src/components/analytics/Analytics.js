import React, {Component} from 'react';
import './analytics.css';
import Header from '../header/Header';
import Subheader from  '../subheader/Subheader';
import TimeDropdown from  '../subheader/time-dropdown/TimeDropdown';
import Hashtags from '../hashtags/index';
import TrollsActivity from '../trolls-activity/index';
import TopNews from '../top-news/index';
import TopRetweetedNews from '../top-retweeted-news/index';
import TopInfluencers from '../top-influencers/index';
import TopTrolls from '../top-trolls/index';
import TopMentionedUser from '../top-mentioned-user/index';
import Footer from '../footer/Footer';

class Analytics extends Component {
   state = {
      timePeriod: false,
      timePeriodValue: '15 min'
   };

   componentDidMount() {
      // this.props.getTwitterData();
   };

   toogleTimePeriod = () => {
      this.setState(state => ({timePeriod: !state.timePeriod}))
   };

   showTimePeriodDropdown = () => {
      if(this.state.timePeriod) {
         return (
              <div className='timeDropdownWrapper'>
                 <TimeDropdown/>
              </div>
         )
      }
   };

   render() {
      return (
           <div>
              <Header/>
              <Subheader onClick={this.toogleTimePeriod}
                         timePeriodValue={this.state.timePeriodValue}
              />
              <div className='dropdownWrapper'>
                 {this.showTimePeriodDropdown()}
              </div>
              <Hashtags/>
              <TrollsActivity/>
              <section className='topWrapper'>
              <div className='topAllNewsWrapper'>
                  <div className='topNewsWrapper'>
                     <TopNews/>
                  </div>
                  <div className='topNewsWrapper'>
                     <TopRetweetedNews/>
                  </div>
              </div>
              <div className='influencersTrollsMentionedWrapper'>
                 <TopInfluencers/>
              </div>
              <div className='influencersTrollsMentionedWrapper'>
                  <TopTrolls/>
              </div>
              <div className='influencersTrollsMentionedWrapper'>
                 <TopMentionedUser/>
              </div>
              </section>
              <div className='footerWrapper'>
                 <Footer/>
              </div>
           </div>
      );
   }
}

export default Analytics;