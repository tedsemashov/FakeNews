import { connect } from "react-redux";

import Reports from "./Reports";

import {onFilterChange, setLoadingState, fetchReportsData} from "../../actions";

const mapStateToProps = (state) => {
  return {
    loading: !state.isLoaded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => {
      dispatch(setLoadingState(false));
      dispatch(fetchReportsData());
    },
    onFilterChange: (timePeriod, keyword) => {
      // dispatch(setLoadingState(false));
      dispatch(onFilterChange(timePeriod, keyword));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
