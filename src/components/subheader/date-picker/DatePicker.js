import React from 'react';
import { LinkedCalendar } from 'rb-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment'

import './DatePicker.css';

export default class DatePicker extends React.Component {
  onDatesChange = ({ startDate, endDate }) => {
    const dates = [moment(startDate.$d).format("YYYY-MM-DD"), moment(endDate.$d).format("YYYY-MM-DD")];
    const { onTimePeriodSelect, toogleTimePeriod, setLoadingState, setDates } = this.props;
    toogleTimePeriod();
    setDates(dates);
    onTimePeriodSelect();
  };

  render () {
    return (
      <div className="DatePicker">
        <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
      </div>
    );
  }
};
