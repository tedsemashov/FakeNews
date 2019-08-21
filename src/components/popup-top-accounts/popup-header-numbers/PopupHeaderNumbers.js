import React, {Component} from 'react';
import './popupHeaderNumbers.css';

class PopupHeaderNumbers extends Component {

   componentDidMount() {

   };

   checkButtonColor = () => {
      const color = this.props.color === 'green' ? 'popupHeaderPercentGreen' : 'popupHeaderPercentRed';
      return <button className={color}>{this.props.percent}%</button>
   };

   render() {
      return (
           <div>
              <div className='popupMainNumbersWrapper'>
                 <p className='popupMainNumbers'>{this.props.numbers}</p>
                 {this.checkButtonColor()}
                 {/*<button className='popupHeaderPercent'>{this.props.percent}%</button>*/}
              </div>
              <p className='popupNumbersDescription'>{this.props.descr}</p>
           </div>
      );
   }
}

export default PopupHeaderNumbers;