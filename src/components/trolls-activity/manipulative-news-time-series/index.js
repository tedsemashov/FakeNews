import { connect } from "react-redux";
import ManipulativeNewsTimeSeries from './ManipulativeNewsTimeSeries';

const mapStateToProps = (state) => {
  return {
    timeSeries: state.fn_tw_count_ts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManipulativeNewsTimeSeries)
