import React from 'react';
import _ from 'lodash';

import { avatar } from '../../helpers.js'

import '../topNews/top-news.css';

export default class TopRetweetedNews extends React.Component{
  render() {
    const { topReTweetedNews } = this.props;
    const title = 'Top retweeted neews';

    const newsBlock = (news)=> {
      return(
        <div className='expert-top-news' key={news.id_txt}>
        <div className='top-news-content d-flex'>
          {avatar(news.image_url)}
          <span>
            {_.get(news, 'text', '')}
          </span>
        </div>
         <button className={news.clicked ? 'not-fake' : 'fake'}>
           <span/>
           Fake
         </button>
        </div>
      )
    };

    return(
      <div className="w-100">
        <div className='news-block-header'>
          <h2>{title}</h2>
          <span>Mark news as fake</span>
        </div>
        {_.map(topReTweetedNews, newsBlock)}
        <button className="see-all">see all</button>
      </div>
    );
  }
}
