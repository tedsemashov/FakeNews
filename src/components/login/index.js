import { connect } from "react-redux";
import Login from './Login';
import {getTwitterData} from "../../actions";

const mapStateToProps = (state) => {
   return {
      user: state.user
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getTwitterData: () => dispatch(getTwitterData())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)