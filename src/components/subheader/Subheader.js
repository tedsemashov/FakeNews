import React from "react";
import moment from "moment";
import _ from "lodash";
import classNames from "classnames";
import {Container, Row, Col} from "react-bootstrap";

import Section from "./section/Section";
import Dropdown from "../dropdown";
import Search from "./search-input/Search";
// import DatePicker from "./date-picker/DatePicker";
import ComboInput from "./date-picker/ComboInput";

import "./subheader.scss";

export const TODAY_PERIOD = "TODAY";
export const ONE_DAY_PERIOD = "ONE DAY";
export const TREE_DAYS_PERIOD = "THREE DAYS";
export const LAST_WEEK = "LAST WEEK";
export const LAST_TWO_WEEKS = "LAST TWO WEEKS";
export const LAST_THREE_WEEKS = "LAST THREE WEEKS";
export const LAST_MONTH = "LAST MONTH";
export const LAST_QUOTER = "LAST QUARTER";

export const DEFAULT_PERIOD = TODAY_PERIOD;
export const TIME_PERIODS = [
  TODAY_PERIOD,
  ONE_DAY_PERIOD,
  TREE_DAYS_PERIOD,
  LAST_WEEK
];

export const DATE_FORMAT = "YYYY-MM-DD";

export function formatDate(date) {
  return date.format(DATE_FORMAT);
}

export function convertToDates(timePeriod, { defaultBlank } = {}) {
  switch(timePeriod) {
    case TODAY_PERIOD:
      return [formatDate(moment()), formatDate(moment())];
    case ONE_DAY_PERIOD:
      return [formatDate(moment().subtract(1, "d")), formatDate(moment())];
    case TREE_DAYS_PERIOD:
      return [formatDate(moment().subtract(3, "d")), formatDate(moment())];
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
      return defaultBlank ? [] : timePeriod;
  }
}

export function convertToTimePeriod(period) {
  if(!_.isArray(period)) return period;

  const [startDate, endDate] = period;

  return [formatDate(startDate), formatDate(endDate)];
}

export default class Subheader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { togglePeriod: false };

    this.onPeriodChange = this.onPeriodChange.bind(this);
    this.toggleTimePeriod = this.toggleTimePeriod.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleEscapePress = this.handleEscapePress.bind(this);
  }

  handleEscapePress(e) {
    if (this.state.togglePeriod && e.keyCode === 27) {
      this.state.togglePeriod();
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('focusout', this.handleClickOutside);
    document.addEventListener('keyup', this.handleEscapePress);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('focusout', this.handleClickOutside);
    document.addEventListener('keyup', this.handleEscapePress);
  }

  periodLabel() {
    const { timePeriod } = this.props;

    if(!_.isArray(timePeriod)) return timePeriod;

    return timePeriod.join("  -  ");
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.togglePeriod) {
      this.toggleTimePeriod();
    }
  }

  toggleTimePeriod() {
    const togglePeriod = !this.state.togglePeriod;

    this.setState({ togglePeriod });
  };

  onPeriodChange(period) {
    this.setState({ togglePeriod: false }, () => this.props.onFilterChange(convertToTimePeriod(period), this.props.keyword));
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

  // <div className="period-calendar">
  //   <DatePicker timePeriod={timePeriod} onChange={this.onPeriodChange} />
  // </div>
  renderPeriod() {
    if(!this.state.togglePeriod) return null;

    const { timePeriod } = this.props;
    const grid = 12;// Math.max(2, Math.ceil(12 / TIME_PERIODS.length));

    return(
      <div className="dropdownWrapper timeDropdownWrapper">
        <div className="dropdown-container">
          <Container fluid>
            <Row>
              {_.map(TIME_PERIODS, (period)=> {
                const className = classNames("dropdownInput", "default", { active: timePeriod === period, default: timePeriod !== period });
                const onClick = () => this.onPeriodChange(period);

                return(
                  <Col key={period} sm={grid}>
                    <div className={className} onClick={onClick}>
                      {period}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        <ComboInput key={typeof(timePeriod)} timePeriod={timePeriod} onChange={this.onPeriodChange} />
      </div>
    );
  }

  render() {
    const { keyword } = this.props;

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
            <div className="inputWrapperTime" ref={(node) => this.wrapperRef = node}>
              <Dropdown
                className="dropdownInput"
                placeholder="Select time period"
                title="Time Period"
                onClick={this.toggleTimePeriod}
                text={this.periodLabel()}
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
