import { connect } from "react-redux";
import Login from './Login';
import {logInUser} from "../../actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userLoggedIn: state.userLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch(logInUser(user));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)