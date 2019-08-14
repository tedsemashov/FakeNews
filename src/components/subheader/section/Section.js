import React, {Component} from 'react';
import './section.css';

class Section extends Component {

   componentDidMount() {
   };

   render() {
      return (
         <button className={this.props.sectionClass}>{this.props.sectionValue}</button>
      );
   }
}

export default Section;