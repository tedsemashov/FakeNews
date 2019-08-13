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
              <input type={this.props.type} className={this.props.className} placeholder={this.props.placeholder}
                     onBlur={this.props.onBlur}/>
           </div>
      );
   }
}

export default Input;