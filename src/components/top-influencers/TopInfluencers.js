import React, {Component} from 'react';
import './topInfluencers.css';
import SectionTitle from '../section-title/SectionTitle';
import TopInfluencersSection from '../top-influencers/top-influencers-section/TopInfluencersSection';

class TopInfluencers extends Component {

   componentDidMount() {

   };

   render() {
      const topInfluencers = this.props.topInfluencers;
      return (
           <div className='topInfluencersContainer'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP INFLUENCERS'/>
              </div>
              <div className='influencersWrapper'>
                 <div className='topInfluencersAccounts'>
                    {
                       // topInfluencers.map(({user_name}) =>
                       //      <TopInfluencersSection name={user_name}/>
                       // )
                    }
                 </div>
              </div>
           </div>
      );
   }
}

export default TopInfluencers;