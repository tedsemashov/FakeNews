import React from 'react';
import './popupHeaderNumbers.css';

const PopupHeaderNumbers = ({ color, percent, numbers, descr }) => {
  const checkButtonColor = () => {
    let btnColor = color === 'green' ? 'popupHeaderPercentGreen' : 'popupHeaderPercentRed';
    return <button className={btnColor}>{percent}%</button>;
  };

  return (
    <div>
      <div className="popupMainNumbersWrapper">
        <p className="popupMainNumbers">{numbers}</p>
        {checkButtonColor()}
      </div>
      <p className="popupNumbersDescription">{descr}</p>
    </div>
  );
};

export default PopupHeaderNumbers;
