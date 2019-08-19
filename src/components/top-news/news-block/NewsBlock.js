import React, {Component} from 'react';
import './newsBlock.css';

class NewsBlock extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='newsContainer'>
              <a href=''>{this.props.text}</a>
           </div>
      );
   }
}

export default NewsBlock;