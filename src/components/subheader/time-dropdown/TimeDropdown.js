import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Section from "../section/Section";
import DatePicker from "../date-picker/DatePicker";

import "./timeDropdown.css";

export default class TimeDropdown extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    periods: PropTypes.array.isRequired
  };

  render() {
    const { period } = this.props;
    const sections = this.props.periods.map((section) => {
      const className = classNames({
        sectionDefault: period !== section,
        sectionSelected: period === section
      });

      return(
        <Section
          key={section}
          sectionClass={className}
          sectionValue={section}
          onClick={() => this.props.onChange(section)}
          />
      );
    });

    return(
      <div className="timeContainer">
        <div className="timeTypesWrapper">
          {sections}
        </div>

        <DatePicker onChange={({ startDate, endDate }) => this.props.onChange([startDate, endDate])} />
      </div>
    );
  }
}
