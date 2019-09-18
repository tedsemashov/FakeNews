import { connect } from "react-redux";
import TopManipulativeRetweets from './TopManipulativeRetweets';

const mapStateToProps = (state) => {
   return {
      topManipulativeRetweets: state.top_fn_rtweets
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopManipulativeRetweets)
