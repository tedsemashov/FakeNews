import React, {Component} from 'react';
import './retweetedNews.css';
import SectionTitle from '../section-title/SectionTitle'

class RetweetedNews extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP RETWEETED NEWS'/>
              </div>
           </div>
      );
   }
}

export default RetweetedNews;