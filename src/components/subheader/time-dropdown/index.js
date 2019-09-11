import { connect } from 'react-redux';
import TimeDropdown from './TimeDropdown';
import { setLoadingState, setDates } from '../../../actions';

const mapStateToProps = (state) => {
  return {
    dates: state.dates
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setDates: (dates) => {
      dispatch(setLoadingState(false));
      dispatch(setDates(dates));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeDropdown);
