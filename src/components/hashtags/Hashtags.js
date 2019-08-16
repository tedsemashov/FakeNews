import React, {Component} from 'react';
import './hashtags.css';
import SectionTitle from '../section-title/SectionTitle';
import Words from './words/index';
import HashtagChart from '../hashtagChart/index';

class Hashtags extends Component {

   componentDidMount() {
   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapper'>
                 <SectionTitle value='HASHTAGS'/>
              </div>
              <div className='wordsGraphicsWrapper'>
                 <div className='wordsWrapper'>
                    <div className='maskCopyright'/>
                    <Words/>
                    <div className='lineHorizontalSeparator'/>
                 </div>
                 <div className='lineSeparator'/>
                 <div className='wordsChartWrapper'>
                    <div className='maskCopyright'/>
                    <HashtagChart/>
                 </div>
              </div>
           </div>
      );
   }
}

export default Hashtags;