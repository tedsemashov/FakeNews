import React from 'react';
import './timeDropdown.css';
import Section from '../section/Section';
import DatePicker from '../../subheader/date-picker/index';

const TimeDropdown = ({ toogleTimePeriod }) => {
  return (
    <div className="timeContainer">
      <div className="timeTypesWrapper">
        <Section sectionClass="sectionSelected" sectionValue="15 MIN" />
        <Section sectionClass="sectionDefault" sectionValue="YESTERDAY" />
        <Section sectionClass="sectionDefault" sectionValue="3 DAYS" />
        <Section sectionClass="sectionDefault" sectionValue="LAST WEEK" />
        <Section sectionClass="sectionDefault" sectionValue="LAST MONTH" />
        <Section sectionClass="sectionDefault" sectionValue="LAST QUARTER" />
      </div>
      <DatePicker toogleTimePeriod={toogleTimePeriod} />
    </div>
  );
};

export default TimeDropdown;
