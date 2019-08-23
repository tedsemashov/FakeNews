import { connect } from "react-redux";
import TopMentionedUser from './TopMentionedUser';

const mapStateToProps = (state) => {
   return {
      topInfluencers: state.top_influencers
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMentionedUser)