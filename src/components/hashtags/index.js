import { connect } from "react-redux";
import _ from "lodash";

import Hashtags from "./Hashtags";

import {getTwitterData, setLoadingState, setKeywordData} from "../../actions";

const mapStateToProps = (state) => _.pick(state, ["keyword", "hashtags", "timePeriod", "tweets_count_ts"]);
const mapDispatchToProps = (dispatch) => {
  return {
    onTagClick: (keyword, timePeriod) => {
      dispatch(setLoadingState(false));
      dispatch(setKeywordData(keyword));
      dispatch(getTwitterData({ keyword, timePeriod }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hashtags);
