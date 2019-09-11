import React from 'react';
import './section.css';

const Section = ({ sectionClass, sectionValue, onClick }) => {
  return <button className={sectionClass} onClick={onClick}>{sectionValue}</button>;
};

export default Section;
