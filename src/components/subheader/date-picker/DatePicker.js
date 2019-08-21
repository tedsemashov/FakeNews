import React, { Component } from 'react';
import './DatePicker.css';
import { LinkedCalendar } from 'rb-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
class DatePicker extends Component {
  onDatesChange = ({ startDate, endDate }) => {
    console.log({ startDate, endDate });
  };

  render() {
    return (
      <div className="DatePicker">
        <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
      </div>
    );
  }
}

export default DatePicker;
