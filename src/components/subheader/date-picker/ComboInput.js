import React from "react";
import PropTypes from "prop-types";
import { DateRangePicker } from 'react-dates';
import moment from "moment";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { convertToDates } from "./../Subheader";

import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import './combo-input.scss';

export const PERIOD_START_DATE_ID = "period-combo-input-start";
export const PERIOD_END_DATE_ID = "period-combo-input-end";

export default class ComboInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    timePeriod: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  };

  convertToStartEndDate = (timePeriod) => _.isArray(timePeriod) ? convertToDates(timePeriod) : [];

  constructor(props) {
    super(props);

    const [startDate, endDate] = this.convertToStartEndDate(props.timePeriod);

    this.state = { focused: null, startDate, endDate };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
  }

  onClose({startDate, endDate}) {
    if(!startDate || !endDate) return;

    this.props.onChange([startDate, endDate]);
  }

  onDatesChange({startDate, endDate}) { this.setState({ startDate, endDate }) }

  onIconClick() {
    const currentFocus = this.state.focused;
    const focused = currentFocus ? null : "startDate";

    this.setState({ focused });
  }

  render() {
    const { focused, startDate, endDate } = this.state;

    return(
      <div className="combo-date-range-input">
        <div className="heading-label">
          Custom range
        </div>

        <DateRangePicker
          startDate={startDate ? moment(startDate) : startDate}
          startDatePlaceholderText="Start Date"
          endDate={endDate ? moment(endDate) : endDate}
          endDatePlaceholderText="End Date"
          maxDate={moment()}
          onDatesChange={this.onDatesChange}
          onFocusChange={(focused) => { this.setState({ focused }) }}
          startDateId={PERIOD_START_DATE_ID}
          endDateId={PERIOD_END_DATE_ID}
          focusedInput={focused}
          firstDayOfWeek={1}
          isOutsideRange={(day) => day > moment()}
          noBorder
          readOnly
          initialVisibleMonth={() => moment().subtract(1, "month")}
          hideKeyboardShortcutsPanel
          customArrowIcon={<FontAwesomeIcon icon={faArrowRight} onClick={this.onIconClick} />}
          minimumNights={0}
          onClose={this.onClose}
          verticalSpacing={0}
          displayFormat="YYYY-MM-DD"
        />
      </div>
    );
  }
}
