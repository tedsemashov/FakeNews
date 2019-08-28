import React from 'react';
import './topNews.css';
import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from './news-block/index';
import Button from '../button/Button';

const TopNews = ({ topNews }) => {
  return (
    <div className="hashtagsWrapper">
      <div className="titleWrapperNews">
        <SectionTitle value="TOP NEWS" />
      </div>
      <div className="topNewsBlockWrapper">
        {topNews.map(({ text, count }) => (
          <NewsBlock key={text} text={text} />
        ))}
      </div>
      <div className="buttonSeeAllWrapper">
        <Button value={'SEE ALL'} />
      </div>
    </div>
  );
};

export default TopNews;
