import React, {Component} from 'react';
import './topInfluencers.css';
import SectionTitle from '../section-title/SectionTitle'

class TopInfluencers extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP INFLUENCERS'/>
              </div>
           </div>
      );
   }
}

export default TopInfluencers;