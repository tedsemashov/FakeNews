import { connect } from "react-redux";
import _ from "lodash";

import Hashtags from "./Hashtags";

import {getTwitterData, setLoadingState} from "../../actions";

const mapStateToProps = (state) => _.pick(state, ["keyword", "hashtags", "timePeriod", "tweets_count_ts"]);
const mapDispatchToProps = (dispatch) => {
  return {
    onTagClick: (keyword) => {
      dispatch(setLoadingState(false));

      // TBD: add dates to params list from filter;
      // const dates = snapshot.timePeriod; ???
      dispatch(getTwitterData({ keyword }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hashtags);
