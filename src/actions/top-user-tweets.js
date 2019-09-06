import axios from "axios";

import {EXPERT_API_URL, SAVE_LABELS_BODY, TOPUSERTWEETS_MARK_AS_FAKE} from "../constants/expertsConstants";
import {setLoadingState} from "../actions";

export function updateFakeUsers(user) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, fn_users: [user] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      dispatch(setLoadingState(true));
      dispatch(onUpdateFakeUsers(data));
    };

    // perform request;
    axios.post(EXPERT_API_URL, params, { headers }).then(callback).catch((e) => console.log(e));
  };
}

export function onUpdateFakeUsers(data) {
  debugger;

  return {
    type: TOPUSERTWEETS_MARK_AS_FAKE,
    ...data
  }
}
