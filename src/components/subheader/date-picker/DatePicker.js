import React from "react";
import PropTypes from "prop-types";
import { LinkedCalendar } from "rb-datepicker";
import _ from "lodash";

import "./DatePicker.css";

export default class DatePicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  dateOptions() {
    const { timePeriod } = this.props;

    if(!_.isArray(timePeriod)) return {};

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
