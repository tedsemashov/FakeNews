import React from 'react';
import _ from 'lodash';

import './top-news.css';

export default function TopNews(props) {
  const { topNewsList, title }=props;

  const newsBlock = (news)=> {
    return(
      <div className='expert-top-news' key={news.id_txt}>
       <span>{_.get(news, 'text', '')}</span>
       <button className={news.clicked ? 'fake' : 'not-fake'}>
         <span/>
         Fake
       </button>
      </div>
    )
  }

  return(
    <div className='col-12'>
      <div className='news-block-header'>
        <h2>{title}</h2>
        <span>Mark news as fake</span>
      </div>
      {_.map(topNewsList, newsBlock)}
      <button className="see-all">see all</button>
    </div>

  );
}
