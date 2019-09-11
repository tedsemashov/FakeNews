import { connect } from 'react-redux';
import { getTwitterData, setLoadingState, onFilterChange } from '../../actions';
import Analytics from './Analytics';
import { convertToDates } from "./../subheader/Subheader";

const mapStateToProps = state => {
  return {
    cred: state.user,
    isLoaded: state.isLoaded,
    period: state.timePeriod,
    keyword: state.keyword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTwitterData: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(getTwitterData({ dates, keyword }));
    },

    onFilterChange: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(setLoadingState(false));
      dispatch(onFilterChange(period, keyword));
      dispatch(getTwitterData({ dates, keyword }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);
