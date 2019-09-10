import { connect } from "react-redux";
import _ from "lodash";

import Subheader, { convertToDates } from "./Subheader";
import { getTwitterData, onFilterChange, setLoadingState } from "./../../actions";

const mapStateToProps = (state) => _.pick(state, ["keyword", "timePeriod"]);
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(setLoadingState(false));
      dispatch(onFilterChange(period, keyword));
      dispatch(getTwitterData({ dates, keyword }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subheader);
