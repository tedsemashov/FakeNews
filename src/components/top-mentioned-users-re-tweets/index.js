import { connect } from "react-redux";

import {apiMarkFakeUser, apiUnmarkFakeUser, processUser} from "../../actions/top-mentioned-users-re-tweets";

import TopMentionedUsersReTweets from "./TopMentionedUsersReTweets";

const mapStateToProps = (state) => {
  return {
    processing: state.topMentionedUsersReTweetsProcessing,
    users: state.top_rt_users_tw,
    fn_users: state.fn_users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markFake: (user) => {
      dispatch(processUser(user));
      dispatch(apiMarkFakeUser(user));
    },
    unmarkFake: (user) => {
      dispatch(processUser(user));
      dispatch(apiUnmarkFakeUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMentionedUsersReTweets);
