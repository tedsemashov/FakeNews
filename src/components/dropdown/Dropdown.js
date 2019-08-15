import React, {Component} from 'react';
import './dropdown.css';

class Dropdown extends Component {

   componentDidMount() {
   };

   render() {
      return (
         <div className='dropdown'>
            <p className='dropdownTitle'>{this.props.title}</p>
            <div className='dropdownContainer'>
               <input type="text"
                      className={this.props.className}
                      placeholder={this.props.placeholder}
                      value={this.props.value}
                      readOnly={true}
               />
               <div className='arrowWrapper' onClick={this.props.onClick}>
                  <div className="arrowDown"/>
               </div>
            </div>
         </div>
      );
   }
}

export default Dropdown;