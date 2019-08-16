import { connect } from "react-redux";
import HashtagChart from './HashtagChart';

const mapStateToProps = (state) => {
   return {
      tweetsCount: state.tweets_count_ts
      // filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(HashtagChart)