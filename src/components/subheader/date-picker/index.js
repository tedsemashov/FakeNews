import { connect } from 'react-redux';
import DatePicker from './DatePicker';
import { getTwitterByDate } from '../../../actions';

const mapDispatchToProps = dispatch => {
  return {
    getTwitterByDate: reqBody => dispatch(getTwitterByDate(reqBody))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DatePicker);
