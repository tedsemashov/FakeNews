import React, {Component} from 'react';
import './popupSection.css';

class PopupSection extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='popupSectionBlock'>
            <div className='popupSectionHeader'>
               <p className='popupSectionFullName'>{this.props.name}</p>
               <p className='popupSectionNickDate'>{this.props.acc} • {this.props.date}</p>
            </div>
              <a className='popupSectionTweet' href=''>
                 {this.props.tweetText}
              </a>
           </div>
      );
   }
}

export default PopupSection;