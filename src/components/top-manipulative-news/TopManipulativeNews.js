import React from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from './news-block/index';
import NoData from "./../no-data/NoData";

function renderContent(topManipulativeNews) {
  return(
    <React.Fragment>
      <div className="topManipulativeNewsBlockWrapper">
        {topManipulativeNews.map(({ text }) => <NewsBlock key={text} text={text} />)}
      </div>
    </React.Fragment>
  );
}

const TopManipulativeNews = ({ topManipulativeNews }) => {
  return(
    <div>
      <div className="titleWrapperNews">
        <SectionTitle value="TOP MANIPULATIVE NEWS" />
      </div>
      {_.isEmpty(topManipulativeNews) ? (<div className="topNewsBlockWrapper"><NoData /></div>) : renderContent(topManipulativeNews)}
    </div>
  );
};

export default TopManipulativeNews;
