import { connect } from "react-redux";

import { getTwitterData, setLoadingState, onFilterChange } from '../../actions';

import FixedKeywords from "./FixedKeywords";

const mapStateToProps = (state) => {
  return {
    timePeriod: state.timePeriod,
    keyword: state.keyword,
    keywords: state.kw_links
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (keyword, timePeriod) => {
      dispatch(setLoadingState(false));
      dispatch(onFilterChange(timePeriod, keyword));
      dispatch(getTwitterData({ timePeriod, keyword }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FixedKeywords);
