import React from 'react';

import './input.css';

const Input = ({ titleClassName, title, type, className, placeholder, ...props }) => {
  return (
    <div className="inputContainer">
      <p className={titleClassName}>{title}</p>
      <input type={type} className={className} placeholder={placeholder} {...props} />
    </div>
  );
};

export default Input;
