import { connect } from "react-redux";
import TopTrolls from './TopTrolls';

const mapStateToProps = (state) => {
   return {
      fakeData: state.fakeData
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTrolls)