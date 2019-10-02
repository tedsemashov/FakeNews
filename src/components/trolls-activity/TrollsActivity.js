import React from "react";

import SectionTitle from '../section-title/SectionTitle';
import ManipulativeNewsTimeSeries from "./manipulative-news-time-series";
import ManipulativeNewsProbTimeSeries from "./manipulative-news-prob-time-series";

import './trollsActivity.css';

class TrollsActivity extends React.Component {
  render() {
    return (
      <div className='trollsWrapper'>
        <div className='topWrapper'>
          <div className='titleWrapper'>
            <SectionTitle value='TROLLS ACTIVITY'/>
          </div>
          <div className='trollsChartsWrapper'>
            <div className='trollsTimeSeries'>
              <p className='topTrollsWorldHeader'>Fake News Amount Time Series</p>
              <ManipulativeNewsTimeSeries/>
            </div>
            <div className='trollsProbTimeSeries'>
              <p className='topTrollsWorldHeader'>Fake News Probability Time Series</p>
              <ManipulativeNewsProbTimeSeries/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrollsActivity;
