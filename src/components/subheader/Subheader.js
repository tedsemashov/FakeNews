import React from "react";
import moment from "moment";
import _ from "lodash";

import TimeDropdown from "./time-dropdown/TimeDropdown";
import Section from "./section/Section";
import Dropdown from "../dropdown";
import Search from "./search-input/Search";

import "./subheader.css";

export const ONE_DAY_PERIOD = "1 DAY";
export const YESTERDAY_PERIOD = "YESTERDAY";
export const THREE_DAYS_PERIOD = "3 DAYS";
export const LAST_WEEK_PERIOD = "LAST WEEK";
export const LAST_MONTH_PERIOD = "LAST MONTH";
export const LAST_QUARTER_PERIOD = "LAST QUARTER";

export const DATE_FORMAT = "YYYY-MM-DD";

export function formatDate(date) {
  return date.format(DATE_FORMAT);
}

export function convertToDates(timePeriod) {
  switch(timePeriod) {
    case ONE_DAY_PERIOD:
      return [formatDate(moment().subtract(1, "d")), formatDate(moment())];
    case YESTERDAY_PERIOD:
      return [formatDate(moment().subtract(1, "d")), formatDate(moment().subtract(1, "day"))];
    case THREE_DAYS_PERIOD:
      return [formatDate(moment().subtract(3, "d")), formatDate(moment())];
    case LAST_WEEK_PERIOD:
      return [formatDate(moment().subtract(1, "w")), formatDate(moment())];
    case LAST_MONTH_PERIOD:
      return [formatDate(moment().subtract(1, "M")), formatDate(moment())];
    case LAST_QUARTER_PERIOD:
      return [formatDate(moment().subtract(4, "M")), formatDate(moment())];
    default: // [<date>, <date>]
      return timePeriod;
  }
}

export function convertToLabel(timePeriod) {
  return _.isArray(timePeriod) ? timePeriod.map(formatDate).join(" - ") : timePeriod;
}

export default class Subheader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { togglePeriod: false };

    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.toggleTimePeriod = this.toggleTimePeriod.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
  }

  toggleTimePeriod(event) {
    const togglePeriod = !this.state.togglePeriod;

    this.setState({ togglePeriod });
  };

  onPeriodChange(period) {
    const { keyword } = this.props;

    this.setState({ togglePeriod: false }, () => this.props.onChange(period, keyword));
  }

  onKeywordChange(keyword) {
    const { timePeriod } = this.props;

    this.props.onChange(timePeriod, keyword);
  }

  onEmotionChange(emotion) {
    // TBD: also add to other callbacks and pass on props.onChange;
    const { keyword, timePeriod } = this.props;

    this.props.onChange(timePeriod, keyword, emotion);
  }

  renderPeriod() {
    if(!this.state.togglePeriod) return null;

    const { timePeriod } = this.props;
    const periods = [
      ONE_DAY_PERIOD,
      YESTERDAY_PERIOD,
      THREE_DAYS_PERIOD,
      LAST_WEEK_PERIOD,
      LAST_MONTH_PERIOD,
      LAST_QUARTER_PERIOD
    ];

    return(
      <div className="dropdownWrapper">
        <div className="timeDropdownWrapper">
          <TimeDropdown period={timePeriod} periods={periods} onChange={this.onPeriodChange} />
        </div>
      </div>
    );
  }

  render() {
    const { timePeriod, keyword } = this.props;

    return(
      <React.Fragment>
        <div className="subheaderContainer">
          <div className="subheaderSections">
            <div className="sectionsWrapper">
              <Section sectionClass="sectionSelected" sectionValue="DEFAULT" />
              <Section sectionClass="sectionDefault" sectionValue="ZELENSKIY" />
              <Section sectionClass="sectionDefault" sectionValue="WAR WITH RUSSIA" />
            </div>

            <div className="subheaderDots">
              <p className="round" />
              <p className="round" />
              <p className="round" />
            </div>
          </div>

          <div className="subheaderSeparator" />

          <div className="subheaderInputs">
            <div className="inputWrapperTime">
              <Dropdown
                className="dropdownInput"
                placeholder="Select time period"
                title="Time Period"
                onClick={this.toggleTimePeriod}
                text={convertToLabel(timePeriod)}
                />
            </div>

            <div className="inputSearchWrapper">
              <Search
                title="Key words"
                className="searchInputArea"
                keyword={keyword}
                onChange={this.onKeywordChange}

                />
            </div>

            <div className="inputWrapperEmotions">
              <Dropdown
                className="dropdownInput"
                placeholder="Select emotion"
                title="Emotion / Sentiment"
                value="Any"
                />
            </div>
          </div>
        </div>
        {this.renderPeriod()}
      </React.Fragment>
    );
  }
}
