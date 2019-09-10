import React from "react";
import _ from "lodash";
import moment from "moment";

import DatePicker from '../../subheader/date-picker/index';

import './timeDropdown.css';

export default class TimeDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "",
    };

    this.onPeriodSelect = this.onPeriodSelect.bind(this);
  }

  static dateRenges = {
    last_15_min: {
      title: "15 MIN",
      data: [moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
    },
    yesterday: {
      title: "YESTERDAY",
      data: [moment().subtract(1, "days").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
    },
    last_3_days: {
      title: "3 DAYS",
      data: [moment().subtract(3, "days").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
    },
    last_week: {
      title: "LAST WEEK",
      data: [moment().subtract(1, "weeks").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
    },
    last_month: {
      title: "LAST MONTH",
      data: [moment().subtract(1, "months").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
    },
    last_quarter: {
      title: "LAST QUARTER",
      data: [moment().subtract(4, "months").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
    }
  }

  onPeriodSelect(dateKey) {
    const { onTimePeriodSelect, toogleTimePeriod, setDates } = this.props;

    const dateInfo = TimeDropdown.dateRenges[dateKey];

    this.setState({ active: dateKey });

    setDates(TimeDropdown.dateRenges[dateKey].data, dateKey);
    onTimePeriodSelect();
  }

  render() {
    const { onTimePeriodSelect, toogleTimePeriod } = this.props;
    const { active } = this.state;

    let buttonClass = (date) => active === date ? "sectionSelected" : "sectionDefault";

    return (
      <div className="timeContainer">
        <div className="timeTypesWrapper">
          {_.map(TimeDropdown.dateRenges, (value, key)=>{
            return (
              <button
                className={buttonClass(key)}
                key={key}
                onClick={()=>this.onPeriodSelect(key)}>
                {value.title}
              </button>
            )
          })}
        </div>
        <DatePicker toogleTimePeriod={toogleTimePeriod} onTimePeriodSelect={onTimePeriodSelect} />
      </div>
    );
  }
};
