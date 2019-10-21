import { connect } from "react-redux";

import Manage from "./Manage";

import {onFilterChange, setLoadingState, fetchManageData} from "../../actions";

const mapStateToProps = (state) => {
  return {
    loading: !state.isLoaded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => {
      dispatch(setLoadingState(false));
      dispatch(fetchManageData());
    },
    onFilterChange: (timePeriod, keyword) => {
      // dispatch(setLoadingState(false));
      dispatch(onFilterChange(timePeriod, keyword));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
