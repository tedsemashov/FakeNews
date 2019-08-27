import React from 'react';
import './input.css';

const Input = ({ titleClassName, title, type, className, placeholder, onBlur }) => {
  return (
    <div className="inputContainer">
      <p className={titleClassName}>{title}</p>
      <input type={type} className={className} placeholder={placeholder} onBlur={onBlur} />
    </div>
  );
};

export default Input;
