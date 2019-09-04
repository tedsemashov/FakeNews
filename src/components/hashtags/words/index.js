import { connect } from "react-redux";
import _ from "lodash";

import Words from "./Words";

import { getTwitterData, setLoadingState } from "./../../../actions";

const mapStateToProps = (state) => _.pick(state, ["keyword", "hashtags", "timePeriod"]);
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (keyword, snapshot) => {
      dispatch(setLoadingState(false));

      // TBD: add dates to params list from filter;
      // const dates = snapshot.timePeriod; ???
      dispatch(getTwitterData({ keyword }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);
