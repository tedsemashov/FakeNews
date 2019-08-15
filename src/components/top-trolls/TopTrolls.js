import React, {Component} from 'react';
import './topTrolls.css';
import SectionTitle from '../section-title/SectionTitle'

class TopTrolls extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP TROLLS'/>
              </div>
           </div>
      );
   }
}

export default TopTrolls;