import axios from "axios";

import {
  EXPERT_API_URL, SAVE_LABELS_BODY, MANIPULATORS_ADD_PROCESSING,
  MANIPULATORS_REMOVE_PROCESSING, MANIPULATORS_UNMARK_FAKE
} from "../constants/expertsConstants";

export function apiUnmarkFakeUser(user) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, rm_fn_users: [user] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      if(data.result_code === "Ok") {
        dispatch(onUnmarkFakeUser(user));
      }

      dispatch(completeProcessUser(user));
    };

    // perform request;
    axios.post(EXPERT_API_URL, params, { headers }).then(callback).catch((e) => console.log(e));
  };
}

export function processUser(user) {
  return {
    type: MANIPULATORS_ADD_PROCESSING,
    user
  };
}

export function completeProcessUser(user) {
  return {
    type: MANIPULATORS_REMOVE_PROCESSING,
    user
  };
}


export function onUnmarkFakeUser(user) {
  return {
    type: MANIPULATORS_UNMARK_FAKE,
    user
  };
}
