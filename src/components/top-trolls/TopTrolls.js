import React, {Component} from 'react';
import './topTrolls.css';
import SectionTitle from '../section-title/SectionTitle'
import TopInfluencersSection from "../top-influencers/top-influencers-section/TopInfluencersSection";

class TopTrolls extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='topTrollsContainer'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP TROLLS'/>
              </div>
              <div className='topTrollsWrapper'>
                 <div className='topTrollsAccounts'>

                 </div>
              </div>
           </div>
      );
   }
}

export default TopTrolls;