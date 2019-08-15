import React, {Component} from 'react';
import './hashtags.css';
import SectionTitle from '../section-title/SectionTitle'

class Hashtags extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapper'>
                 <SectionTitle value='HASHTAGS'/>
              </div>
           </div>
      );
   }
}

export default Hashtags;