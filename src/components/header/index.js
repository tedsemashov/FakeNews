import { connect } from "react-redux";

import Header from "./Header";

import {userLogOut} from "../../actions";

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(userLogOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
