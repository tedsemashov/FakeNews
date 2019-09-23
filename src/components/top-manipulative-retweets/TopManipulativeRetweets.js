import React from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from './news-block/index';
import NoData from "./../no-data/NoData";

function renderContent(topManipulativeRetweets) {
  return(
    <React.Fragment>
      <div className="topNewsBlockWrapper">
        {topManipulativeRetweets.map(({ text, count, date, fnews_pred_mean }) => {
          return (
            <NewsBlock key={text} text={text} count={count} date={date} fakePersent={fnews_pred_mean} />
          )
        })}
      </div>
    </React.Fragment>
  );
}

const TopManipulativeRetweets = ({ topManipulativeRetweets }) => {
  return(
    <div>
      <div className="titleWrapperNews">
        <SectionTitle value="TOP MANIPULATIVE RETWEETS" />
      </div>
      {_.isEmpty(topManipulativeRetweets) ? (<div className="topNewsBlockWrapper"><NoData /></div>) : renderContent(topManipulativeRetweets)}
    </div>
  );
};

export default TopManipulativeRetweets;
