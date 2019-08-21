import React, {Component} from 'react';
import './topInfluencersSection.css';

class TopInfluencersSection extends Component {

   componentDidMount() {
   };

   convertNumbers = (num) => {
      return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
   };

   setSelectedInfluencerHandler = () => {
      this.props.setSelectedInfluencer(this.props.account);
   };

   render() {
      return (
           <div className='accountSection' onClick={this.setSelectedInfluencerHandler}>
              <div className='imageNameSection'>
                 <img className='userImage' src={this.props.img}/>
                 <div className='userInformWrapper'>
                    <p className='userNickname'>{this.props.name}</p>
                    <p className='userAccount'>{this.props.account}</p>
                 </div>
              </div>
              <div className='buttonsSection'>
                 <button className='btnTweets buttonsTweetFollowers'>
                    {this.convertNumbers(this.props.tweets)} tweets
                 </button>
                 <button className='btnFollowers buttonsTweetFollowers'>
                    {this.convertNumbers(this.props.followers)} followers
                 </button>
                 <button className='btnFakeNews btnFakeNewsGreen'>90% fake news</button>
              </div>
           </div>
      );
   }
}

export default TopInfluencersSection;