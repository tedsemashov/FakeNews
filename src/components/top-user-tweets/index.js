import { connect } from "react-redux";

import TopUserTweets from "./TopUserTweets";

const mapStateToProps = (state) => {
  return {
    users: state.top_users_tw,
    fn_users: state.fn_users
  };
};

const mapDispatchToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopUserTweets);
