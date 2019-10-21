import { connect } from 'react-redux';
import { getTwitterData, setLoadingState, onFilterChange } from '../../actions';
import Analytics from './Analytics';

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
    getTwitterData: (timePeriod, keyword) => {
      dispatch(setLoadingState(false));
      dispatch(getTwitterData({ timePeriod, keyword }));
    },
    onFilterChange: (timePeriod, keyword) => {
      dispatch(setLoadingState(false));
      dispatch(onFilterChange(timePeriod, keyword));
      dispatch(getTwitterData({ timePeriod, keyword }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
