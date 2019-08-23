import React from 'react';
import './DatePicker.css';
import { LinkedCalendar } from 'rb-datepicker';
import { BODY_POST } from '../../../constants';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';


const DatePicker = (props) => {
  let pickedDate = '';
  const onDatesChange = ({ startDate, endDate }) => {
    console.log({ startDate, endDate });

    props.getTwitterByDate(generateRequestObject(BODY_POST, startDate, endDate));
    props.toogleTimePeriod();
    props.setLoadingState();
    props.setTimePeriod(pickedDate);
  };

  const generateRequestObject = (bodyObj, startDate, endDate) => {
    const requestBody = { ...bodyObj };
    let newStartDate = startDate.$y + '-' + (startDate.$M + 1) + '-' + startDate.$D;
    let newEndDate = endDate.$y + '-' + (endDate.$M + 1) + '-' + endDate.$D;
    let newDates = [newStartDate, newEndDate];
    requestBody.dates = newDates;
    pickedDate = formatPickedDate(startDate, endDate);
    return requestBody;
  };

  const formatPickedDate = (startDate, endDate) => {
    let startMonth = startDate.$M+1 < 10 ? '0' + (startDate.$M+1) : startDate.$M+1;
    let startDay = startDate.$D < 10 ? '0' + startDate.$D : startDate.$D;
    let endMonth = endDate.$M+1 < 10 ? '0' + (endDate.$M+1) : endDate.$M+1;
    let endDay = endDate.$D < 10 ? '0' + endDate.$D : endDate.$D;
    return `${startMonth}/${startDay} - ${endMonth}/${endDay}`;
  }

  
    return (
      <div className="DatePicker">
        <LinkedCalendar onDatesChange={onDatesChange} showDropdowns={false} />
      </div>
    );
  
};

export default DatePicker;
