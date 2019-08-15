import React, {Component} from 'react';
import './analytics.css';
import Header from '../header/Header';
import Subheader from  '../subheader/Subheader';
import TimeDropdown from  '../subheader/time-dropdown/TimeDropdown';
import Hashtags from '../hashtags/Hashtags';
import TrollsActivity from '../trolls-activity/TrollsActivity';
import TopNews from '../top-news/TopNews';
import TopRetweetedNews from '../top-retweeted-news/RetweetedNews';
import Footer from '../footer/Footer';

class Analytics extends Component {
   state = {
      timePeriod: false,
      timePeriodValue: '15 min'
   };

   componentDidMount() {
      //Method for getting data from back-end
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
              </section>
              <div className='footerWrapper'>
                 <Footer/>
              </div>
           </div>
      );
   }
}

export default Analytics;