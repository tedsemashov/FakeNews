import { connect } from "react-redux";

import TopMentionedUsersReTweets from "./TopMentionedUsersReTweets";

const mapStateToProps = (state) => {
  return {
    users: state.top_rt_users_tw,
    fn_users: state.fn_users
  };
};

const mapDispatchToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMentionedUsersReTweets);
