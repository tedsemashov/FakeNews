import React, {Component} from 'react';
import './retweetedNews.css';
import SectionTitle from '../section-title/SectionTitle'
import NewsBlock from "../top-news/news-block/NewsBlock";
import Button from "../button/Button";

class RetweetedNews extends Component {

   componentDidMount() {

   };

   render() {
      const topRetweetedNews = this.props.topRetweetedNews;
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP RETWEETED NEWS'/>
              </div>
              <div className='topNewsBlockWrapper'>
                 {
                    topRetweetedNews.map(({text, count}) =>
                         <NewsBlock key={count} text={text}/>
                    )
                 }
              </div>
              <div className='buttonSeeAllWrapper'>
                 <Button value={'SEE ALL'}/>
              </div>
           </div>
      );
   }
}

export default RetweetedNews;