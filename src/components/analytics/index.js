import { connect } from 'react-redux';
import { getTwitterData } from '../../actions';
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);
