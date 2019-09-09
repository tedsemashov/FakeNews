import { connect } from "react-redux";

import {apiUnmarkFakeUser, processUser} from "../../actions/manipulators";

import Manipulators from "./Manipulators";

const mapStateToProps = (state) => {
  return {
    processing: state.manipulatorsProcessing,
    fn_users: state.fn_users,
    top_rt_users_tw: state.top_rt_users_tw,
    top_users_tw: state.top_users_tw
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unmarkFake: (user) => {
      dispatch(processUser(user));
      dispatch(apiUnmarkFakeUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manipulators);
