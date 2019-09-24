import React from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from './news-block/index';
import NoData from "./../no-data/NoData";

function renderContent(topManipulativeNews) {
  return(
    <React.Fragment>
      <div className="topManipulativeNewsBlockWrapper">
        {topManipulativeNews.map(({ text, count, date, fnews_pred_mean }) => {
          return (
            <NewsBlock key={text} text={text} count={count} date={date} fakePersent={fnews_pred_mean} />
          )
        })}
      </div>
    </React.Fragment>
  );
}

const TopManipulativeNews = ({ topManipulativeNews }) => {
  return(
    <div>
      <div className="titleWrapperNews">
        <SectionTitle value="TOP FAKE NEWS" />
      </div>
      {_.isEmpty(topManipulativeNews) ? (<div className="topNewsBlockWrapper"><NoData /></div>) : renderContent(topManipulativeNews)}
    </div>
  );
};

export default TopManipulativeNews;
