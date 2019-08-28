import React from 'react';
import './section.css';

const Section = ({ sectionClass, sectionValue }) => {
  return <button className={sectionClass}>{sectionValue}</button>;
};

export default Section;
