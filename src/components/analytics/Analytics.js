import React, {Component} from 'react';
import './analytics.css';
import Header from '../header/Header';
import Subheader from  '../subheader/Subheader';
import TimeDropdown from  '../subheader/time-dropdown/TimeDropdown';
import Hashtags from '../hashtags/index';
import TrollsActivity from '../trolls-activity/TrollsActivity';
import TopNews from '../top-news/TopNews';
import TopRetweetedNews from '../top-retweeted-news/RetweetedNews';
import TopInfluencers from '../top-influencers/TopInfluencers';
import TopTrolls from '../top-trolls/TopTrolls';
import TopMentionedUser from '../top-mentioned-user/TopMentionedUser';
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
              {this.showTimePeriodDropdown()}
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
              <div className='topAllNewsWrapper'>
                 <TopInfluencers/>
              </div>
              <div className='topAllNewsWrapper'>
                  <TopTrolls/>
              </div>
              <div className='topAllNewsWrapper'>
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