import React, {Component} from 'react';
import './search.css';

class Search extends Component {

   componentDidMount() {
   };

   render() {
      return (
           <div className='searchInput'>
              <p className='searchTitle'>{this.props.title}</p>
              <div className='searchContainer'>
                 <div className='keyWord'>
                    <p className='keyWordValue'>Ukraine</p>
                    <img className='closeImg' src={require('../../../images/header/close@3x.png')}/>
                 </div>
                 <input type="text"
                        className={this.props.className}
                        placeholder={this.props.placeholder}
                 />
                 <img className='closeImg' src={require('../../../images/header/search@3x.png')}/>
              </div>
           </div>
      );
   }
}

export default Search;