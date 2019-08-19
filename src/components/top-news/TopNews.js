import React, {Component} from 'react';
import './topNews.css';
import SectionTitle from '../section-title/SectionTitle';
import NewsBlock from './news-block/index';
import Button from "../button/Button";

class TopNews extends Component {

   componentDidMount() {

   };

   render() {
      const topNews = this.props.topNews;
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP NEWS'/>
              </div>
              <div className='topNewsBlockWrapper'>
                 {
                    topNews.map(({text, count, date}) =>
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

export default TopNews;