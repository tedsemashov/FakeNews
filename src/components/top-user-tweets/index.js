import { connect } from "react-redux";

import { apiMarkFakeUser, apiUnmarkFakeUser, processUser } from "../../actions/top-user-tweets";
import { needTrainModel } from "../../actions/expert";

import TopUserTweets from "./TopUserTweets";

const mapStateToProps = (state) => {
  return {
    processing: state.topUserTweetsProcessing,
    users: state.top_users_tw,
    fn_users: state.fn_users,
    trainingProcessing: state.trainingProcessing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markFake: (user) => {
      dispatch(needTrainModel(true));
      dispatch(processUser(user));
      dispatch(apiMarkFakeUser(user));
    },
    unmarkFake: (user) => {
      dispatch(needTrainModel(true));
      dispatch(processUser(user));
      dispatch(apiUnmarkFakeUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopUserTweets);
