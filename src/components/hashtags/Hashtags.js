import React from 'react';
import './hashtags.css';
import SectionTitle from '../section-title/SectionTitle';
import Words from './words/index';
import HashtagChart from '../hashtagChart/index';

const Hashtags = () => {
  return (
    <div className='hashtagsWrapper'>
      <div className='titleWrapper'>
         <SectionTitle value='HASHTAGS'/>
      </div>
      <div className='wordsGraphicsWrapper'>
         <div className='wordsWrapper'>
            <Words/>
            <div className='lineHorizontalSeparator'/>
         </div>
         <div className='lineSeparator'/>
         <div className='wordsChartWrapper'>
            <HashtagChart/>
         </div>
      </div>
   </div>
  );
};

export default Hashtags;