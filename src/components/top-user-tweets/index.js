import { connect } from "react-redux";

import {apiMarkFakeUser, apiUnmarkFakeUser, processUser} from "../../actions/top-user-tweets";

import TopUserTweets from "./TopUserTweets";

const mapStateToProps = (state) => {
  return {
    processing: state.topUserTweetsProcessing,
    users: state.top_users_tw,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopUserTweets);
