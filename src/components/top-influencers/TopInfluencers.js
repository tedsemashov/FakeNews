import React, {Component} from 'react';
import './topInfluencers.css';
import SectionTitle from '../section-title/SectionTitle';
import TopInfluencersSection from '../top-influencers/top-influencers-section/TopInfluencersSection';

class TopInfluencers extends Component {

   returnInfluencersSection = () => {
      const topInfluencers = this.props.topInfluencers;
      const influencersArr = Object.keys(topInfluencers).map((prop) => {
         topInfluencers[prop].account = '@' + prop;
         return topInfluencers[prop];
      });
      return influencersArr;
   };

   componentDidMount() {
   };

   render() {
      const influencersArr =  this.returnInfluencersSection();
      return (
           <div className='topInfluencersContainer'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP INFLUENCERS'/>
              </div>
              <div className='influencersWrapper'>
                 <div className='topInfluencersAccounts'>
                    {
                       influencersArr.map(({user_name, user_profile_image_url,
                                              account, user_followers_count, user_statuses_count}) =>
                            <TopInfluencersSection
                                 account={account}
                                 name={user_name}
                                 img={user_profile_image_url}
                                 tweets={user_statuses_count}
                                 followers={user_followers_count}
                            />
                       )
                    }
                 </div>
              </div>
           </div>
      );
   }
}

export default TopInfluencers;