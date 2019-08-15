import React, {Component} from 'react';
import './topMentionedUser.css';
import SectionTitle from '../section-title/SectionTitle'

class TopMentionedUser extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='hashtagsWrapper'>
              <div className='titleWrapperNews'>
                 <SectionTitle value='TOP MENTIONED USER'/>
              </div>
           </div>
      );
   }
}

export default TopMentionedUser;