import React from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from './news-block/index';
import NoData from "./../no-data/NoData";

import './topNews.css';

function renderContent(topNews) {
  return(
    <React.Fragment>
      <div className="topNewsBlockWrapper">
        {topNews.map(({ text, count, date, fnews_pred_mean }) => {
          return (
            <NewsBlock key={text} text={text} count={count} date={date} fakePersent={fnews_pred_mean} />
          )
        })}
      </div>
    </React.Fragment>
  );
}

const TopNews = ({ topNews }) => {
  return(
    <div>
      <div className="titleWrapperNews">
        <SectionTitle value="TOP NEWS" />
      </div>
      {_.isEmpty(topNews) ? (<div className="topNewsBlockWrapper"><NoData /></div>) : renderContent(topNews)}
    </div>
  );
};

export default TopNews;
