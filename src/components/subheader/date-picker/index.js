import { connect } from 'react-redux';
import DatePicker from './DatePicker';
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
