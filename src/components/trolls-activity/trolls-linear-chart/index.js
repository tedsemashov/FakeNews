import { connect } from "react-redux";
import TrollsLinearChart from './TrollsLinearChart';

const mapStateToProps = (state) => {
   return {
      tweetsCount: state.tweets_count_ts
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrollsLinearChart)