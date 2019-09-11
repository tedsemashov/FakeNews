import React from "react";
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import Words from './words/Words';
import HashtagChart from '../hashtagChart/HashtagChart';
import NoData from "./../no-data/NoData";

import './hashtags.css';

export default class Hashtags extends React.Component {
  renderData() {
    const { hashtags, keyword, tweets_count_ts, onTagClick } = this.props;

    return(
      <React.Fragment>
        <div className='wordsWrapper'>
          <Words hashtags={hashtags} keyword={keyword} onChange={onTagClick} />
          <div className='lineHorizontalSeparator'/>
        </div>
        <div className='lineSeparator'/>
        <div className='wordsChartWrapper'>
          <HashtagChart tweetsCount={tweets_count_ts} />
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { hashtags } = this.props;

    return(
      <div className='hashtagsWrapper'>
        <div className='titleWrapper'>
          <SectionTitle value='HASHTAGS'/>
        </div>
        <div className='wordsGraphicsWrapper'>
          {_.isEmpty(hashtags) ? <NoData /> : this.renderData()}
        </div>
      </div>
    );
  }
}
