import { connect } from "react-redux";
import TrollsActivity from './TrollsActivity';

const mapStateToProps = (state) => {
   return {
      fakeUsers: state.fakeUsers,
      fakeNews: state.fakeNews
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrollsActivity)