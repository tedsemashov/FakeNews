import React, {Component} from 'react';

import './newsBlock.css';

class NewsBlock extends Component {
   state = {
      link: ''
   };

   generateHttpLink = () => {
      let text = this.props.text;
      let index = text.lastIndexOf('http');
      let result = text.slice(index);
      this.setState({link: result});
   };

   render() {
      return (
           <div className='newsContainer' onClick={this.generateHttpLink}>
              <a target="_blank" rel="noopener noreferrer" href={this.state.link}>{this.props.text}</a>
           </div>
      );
   }
}

export default NewsBlock;