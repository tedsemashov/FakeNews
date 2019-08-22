import React, { Component } from 'react';
import './DatePicker.css';
import { LinkedCalendar } from 'rb-datepicker';
import { BODY_POST } from '../../../constants';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
class DatePicker extends Component {
  onDatesChange = ({ startDate, endDate }) => {
    console.log({ startDate, endDate });

    this.props.getTwitterByDate(this.generateRequestObject(BODY_POST, startDate, endDate));
    this.props.toogleTimePeriod();
  };

  generateRequestObject = (bodyObj, startDate, endDate) => {
    const requestBody = { ...bodyObj };
    // ["2019-08-06", "2019-08-22"]
    let newStartDate = startDate.$y + '-' + (startDate.$M + 1) + '-' + startDate.$D;
    let newEndDate = endDate.$y + '-' + (endDate.$M + 1) + '-' + endDate.$D;
    let newDates = [newStartDate, newEndDate];
    requestBody.dates = newDates;
    return requestBody;
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
