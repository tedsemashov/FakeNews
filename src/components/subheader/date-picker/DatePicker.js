import React from "react";
import PropTypes from "prop-types";
import { LinkedCalendar } from "rb-datepicker";
import moment from "moment";

import "./DatePicker.css";

export default class DatePicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  dateOptions() {
    const { timePeriod } = this.props;

    if(typeof(timePeriod) !== "Array") return {};

    return { startDate: timePeriod[0], endDate: timePeriod[1] };
  }

  render() {
    return(
      <div className="DatePicker">
        <LinkedCalendar
          {...this.dateOptions()}
          onDatesChange={this.props.onChange}
          showDropdowns={false}
          />
      </div>
    );
  }
}
