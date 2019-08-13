import React, {Component} from 'react';
import './input.css';

class Input extends Component {

   filterNames = (value) => {
      // this.props.setInputValue(value);
   };

   onCancel = () => {
      // this.props.setInputValue('');
   };

   render() {
      return (
           <div className='inputContainer'>
              <p className='inputTitle'>{this.props.title}</p>
              <input type="email" className='input' placeholder={this.props.placeholder}/>
           </div>
      );
   }
}

export default Input;