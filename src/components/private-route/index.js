import { connect } from "react-redux";

import { PrivateRoute } from "./PrivateRoute";

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.userLoggedIn
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
