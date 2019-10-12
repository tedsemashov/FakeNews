import React from "react";
import PropTypes from "prop-types";
import { LinkedCalendar } from "rb-datepicker";
import moment from "moment";

import { convertToDates } from "./../Subheader";

import "./DatePicker.scss";

export default class DatePicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(period) {
    this.props.onChange([period.startDate, period.endDate]);
  }

  render() {
    const [startDate, endDate] = convertToDates(this.props.timePeriod);

    return(
      <div className="date-picker">
        <LinkedCalendar
          startDate={moment(startDate)}
          endDate={moment(endDate)}
          onDatesChange={this.onChange}
          showDropdowns={false}
          showWeekNumbers={false}
          />
      </div>
    );
  }
}
