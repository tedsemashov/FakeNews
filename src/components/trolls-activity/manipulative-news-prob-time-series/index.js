import { connect } from "react-redux";
import ManipulativeNewsProbTimeSeries from './ManipulativeNewsProbTimeSeries';

const mapStateToProps = (state) => {
  return {
    timeSeries: state.fn_tw_prob_mean_ts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManipulativeNewsProbTimeSeries)
