import React, {Component} from 'react';
import './button.css';

class Button extends Component {

   componentDidMount() {

   };

   render() {
      return (
         <button className='buttonDefault' onClick={this.props.onClick}>{this.props.value}</button>
      );
   }
}

export default Button;