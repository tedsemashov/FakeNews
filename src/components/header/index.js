import { connect } from "react-redux";

import { userLogOut } from "./../../actions";

import Header from "./Header";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userLoggedIn: state.userLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(userLogOut())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
