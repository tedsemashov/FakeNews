import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import { getTwittersByDate } from '../../../actions';

const mapDispatchToProps = dispatch => {
  return {
    getTwitterByDate: reqBody => dispatch(getTwittersByDate(reqBody))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DatePicker);
