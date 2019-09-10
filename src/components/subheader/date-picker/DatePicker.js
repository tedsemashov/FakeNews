import React from 'react';
import { LinkedCalendar } from 'rb-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment'

import './DatePicker.css';

export default class DatePicker extends React.Component {
  onDatesChange = ({ startDate, endDate }) => {
    const { onTimePeriodSelect, timePeriod, getTwitterByDate, toogleTimePeriod, setLoadingState, setDates } = this.props;
    // TBD: dispatch action!!!
    // don't forget to preserve current filters!!!
    //getTwitterByDate(this.generateRequestObject(BODY_POST, startDate, endDate));
    toogleTimePeriod();
    setLoadingState(true);
    setDates([moment(startDate.$d).format("YYYY-MM-DD"), moment(endDate.$d).format("YYYY-MM-DD")]);
    onTimePeriodSelect();
  };

  // generateRequestObject = (bodyObj, startDate, endDate) => {
  //   const requestBody = { ...bodyObj };
  //   let newStartDate = startDate.$y + '-' + (startDate.$M + 1) + '-' + startDate.$D;
  //   let newEndDate = endDate.$y + '-' + (endDate.$M + 1) + '-' + endDate.$D;
  //   let newDates = [newStartDate, newEndDate];
  //   requestBody.dates = newDates;
  //   let pickedDate = this.formatPickedDate(startDate, endDate);
  //   return requestBody;
  // };

  // formatPickedDate = (startDate, endDate) => {
  //   let startMonth = startDate.$M+1 < 10 ? '0' + (startDate.$M+1) : startDate.$M+1;
  //   let startDay = startDate.$D < 10 ? '0' + startDate.$D : startDate.$D;
  //   let endMonth = endDate.$M+1 < 10 ? '0' + (endDate.$M+1) : endDate.$M+1;
  //   let endDay = endDate.$D < 10 ? '0' + endDate.$D : endDate.$D;
  //   return `${startMonth}/${startDay} - ${endMonth}/${endDay}`;
  // }

  render () {
    return (
      <div className="DatePicker">
        <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
      </div>
    );
  }
};
