import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import { getTwittersByDate, setLoadingState, setTimePeriod, setDates } from '../../../actions';


const mapStateToProps = (state) => {
  return {
     timePeriod: state.timePeriod,
     dates: state.dates
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setLoadingState: isLoaded => dispatch(setLoadingState(isLoaded)),
    setDates: dates => dispatch(setDates(dates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
