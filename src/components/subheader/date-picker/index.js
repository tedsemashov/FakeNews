import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import { getTwittersByDate, setLoadingState, setTimePeriod } from '../../../actions';


const mapStateToProps = (state) => {
  return {
     timePeriod: state.timePeriod
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTwitterByDate: reqBody => dispatch(getTwittersByDate(reqBody)),
    setLoadingState: isLoaded => dispatch(setLoadingState(isLoaded)),
    setTimePeriod: period => dispatch(setTimePeriod(period))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
