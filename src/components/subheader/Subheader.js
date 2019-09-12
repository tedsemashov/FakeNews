import React from "react";
import moment from "moment";
import _ from "lodash";

import Section from "./section/Section";
import Dropdown from "../dropdown";
import Search from "./search-input/Search";

import "./subheader.css";

export const LAST_WEEK = "LAST WEEK";
export const LAST_TWO_WEEKS = "2 WEEKS";
export const LAST_THREE_WEEKS = "3 WEEKS";
export const LAST_MONTH = "LAST MONTH";
export const LAST_QUOTER = "LAST QUARTER";

export const DATE_FORMAT = "YYYY-MM-DD";

export function formatDate(date) {
  return date.format(DATE_FORMAT);
}

export function convertToDates(timePeriod) {
  switch(timePeriod) {
    case LAST_WEEK:
      return [formatDate(moment().subtract(1, "w")), formatDate(moment())];
    case LAST_TWO_WEEKS:
      return [formatDate(moment().subtract(2, "w")), formatDate(moment())];
    case LAST_THREE_WEEKS:
     return [formatDate(moment().subtract(3, "w")), formatDate(moment())];
    case LAST_MONTH:
     return [formatDate(moment().subtract(1, "M")), formatDate(moment())];
    case LAST_QUOTER:
      return [formatDate(moment().subtract(4, "M")), formatDate(moment())];
    default: // [<date>, <date>]
      return timePeriod;
  }
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

  onPeriodChange(e) {
    let period = e.target.outerText;
    const { keyword } = this.props;

    this.setState({ togglePeriod: false }, () => this.props.onFilterChange(period, keyword));
  }

  onKeywordChange(keyword) {
    const { timePeriod } = this.props;

    this.props.onFilterChange(timePeriod, keyword);
  }

  onEmotionChange(emotion) {
    // TBD: also add to other callbacks and pass on props.onChange;
    const { keyword, timePeriod } = this.props;

    this.props.onFilterChange(timePeriod, keyword, emotion);
  }

  renderPeriod() {
    if(!this.state.togglePeriod) return null;

    const { timePeriod } = this.props;
    const periods = [
      LAST_WEEK,
      LAST_TWO_WEEKS,
      LAST_THREE_WEEKS,
      LAST_MONTH,
      LAST_QUOTER
    ];

    return(
      <div className="dropdownWrapper">
        <div className="timeDropdownWrapper">
          {_.map(periods, (period)=> {
            const className = timePeriod === period ? "active" : "default";

            return <div key={period} className={className} onClick={this.onPeriodChange}>{period}</div>
          })}
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
                text={timePeriod}
                />
                {this.renderPeriod()}
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
      </React.Fragment>
    );
  }
}
