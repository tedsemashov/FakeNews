import React, {Component} from 'react';
import './topInfluencersSection.css';

class TopInfluencersSection extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='influencerAccountSection'>
            <p>{this.props.name}</p>
           </div>
      );
   }
}

export default TopInfluencersSection;