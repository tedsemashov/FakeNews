import React from 'react';
import './dropdown.css';

const Dropdown = ({ title, className, placeholder, text, onClick }) => {
  return (
    <div className="dropdown">
      <p className="dropdownTitle">{title}</p>
      <div className="dropdownContainer">
        <input
          type="text"
          className={className}
          placeholder={placeholder}
          value={text}
          readOnly={true}
        />
        <div className="arrowWrapper" onClick={onClick}>
          <div className="arrowDown" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
