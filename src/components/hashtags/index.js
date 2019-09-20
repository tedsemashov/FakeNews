import { connect } from "react-redux";
import _ from "lodash";

import Hashtags from "./Hashtags";
import { convertToDates } from "./../subheader/Subheader";

import {getTwitterData, setLoadingState} from "../../actions";

const mapStateToProps = (state) => _.pick(state, ["keyword", "hashtags", "timePeriod", "tweets_count_ts"]);
const mapDispatchToProps = (dispatch) => {
  return {
    onTagClick: (keyword, timePeriod) => {
      const dates = convertToDates(timePeriod);

      dispatch(setLoadingState(false));
      dispatch(getTwitterData({ keyword, dates }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hashtags);
