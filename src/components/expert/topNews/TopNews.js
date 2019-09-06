import React from 'react';
import _ from 'lodash';

import './top-news.css';

export default class TopNews extends React.Component{
  toggleFakeStatus() {
    this.props.toggleFakeStatus();
  }

  render() {
    const { topNewsList } = this.props;
    const title = 'Top news';

    const newsBlock = (news)=> {
      return(
        <div className='expert-top-news' key={news.id_txt}>
         <span>
           {_.get(news, 'text', '')}
         </span>
         <button className={news.clicked ? 'not-fake' : 'fake'} onClick={this.toggleFakeStatus}>
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
        {_.map(topNewsList, newsBlock)}
        <button className="see-all">see all</button>
      </div>
    );
  }
}
