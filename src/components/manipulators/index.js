import { connect } from "react-redux";

import {apiUnmarkFakeUser, processUser} from "../../actions/manipulators";
import { needTrainModel } from "../../actions/expert";

import Manipulators from "./Manipulators";

const mapStateToProps = (state) => {
  return {
    processing: state.manipulatorsProcessing,
    fn_users: state.fn_users,
    top_rt_users_tw: state.top_rt_users_tw,
    top_users_tw: state.top_users_tw,
    trainingProcessing: state.trainingProcessing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unmarkFake: (user) => {
      dispatch(needTrainModel(true));
      dispatch(processUser(user));
      dispatch(apiUnmarkFakeUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manipulators);
