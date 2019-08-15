import React, {Component} from 'react';
import './topNews.css';
import SectionTitle from '../section-title/SectionTitle'

class TopNews extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP NEWS'/>
              </div>
           </div>
      );
   }
}

export default TopNews;