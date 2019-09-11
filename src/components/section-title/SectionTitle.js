import React from 'react';

import './sectionTitle.css';

const SectionTitle = ({ value }) => {
  return (
    <div className="sectionTitleWrapper">
      <a href={`#${value}`} id={value} className="sectionTitleLink">
        {value}
      </a>
      <div className="sectionTitleUnderline" />
    </div>
  );
};

export default SectionTitle;
