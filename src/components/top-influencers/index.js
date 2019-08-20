import { connect } from "react-redux";
import TopInfluencers from './TopInfluencers';

const mapStateToProps = (state) => {
   return {
      topInfluencers: state.top_influencers
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopInfluencers)