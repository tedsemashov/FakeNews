import React from 'react';
import _ from "lodash";

import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from '../top-news/news-block/NewsBlock';
import NoData from "./../no-data/NoData";

import './retweetedNews.css';

function renderContent(topRetweetedNews) {
  return(
    <React.Fragment>
      <div className="topNewsBlockWrapper">
        {topRetweetedNews.map(({ text, count }) => <NewsBlock key={count} text={text} />)}
      </div>
    </React.Fragment>
  );
}

const RetweetedNews = ({ topRetweetedNews }) => {
  return (
    <div className="hashtagsWrapper">
      <div className="titleWrapperNews">
        <SectionTitle value="TOP RETWEETED NEWS" />
      </div>
      {_.isEmpty(topRetweetedNews) ? (<div className="topNewsBlockWrapper"><NoData /></div>) : renderContent(topRetweetedNews)}
    </div>
  );
};

export default RetweetedNews;
