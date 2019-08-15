import React, {Component} from 'react';
import './sectionTitle.css';

class SectionTitle extends Component {

   componentDidMount() {

   };

   render() {
      return (
           <div className='sectionTitleWrapper'>
               <a href="" className='sectionTitleLink'>{this.props.value}</a>
               <div className='sectionTitleUnderline'/>
           </div>
      );
   }
}

export default SectionTitle;