import { connect } from "react-redux";
import _ from "lodash";

import Subheader, { convertToDates } from "./Subheader";
import { getTwitterData, onFilterChange, setLoadingState } from "./../../actions";

const mapStateToProps = (state) => _.pick(state, ["keyword", "timePeriod"]);
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subheader);
