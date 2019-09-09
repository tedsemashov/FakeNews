import axios from "axios";

import {
  EXPERT_API_URL,
  SAVE_LABELS_BODY, TOPUSERTWEETS_ADD_PROCESSING,
  TOPUSERTWEETS_MARK_AS_FAKE, TOPUSERTWEETS_REMOVE_PROCESSING, TOPUSERTWEETS_UNMARK_AS_FAKE
} from "../constants/expertsConstants";

export function apiMarkFakeUser(user) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, fn_users: [user] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      if(data.result_code === "Ok") {
        dispatch(onMarkFakeUser(user));
      }

      dispatch(completeProcessUser(user));
    };

    // perform request;
    axios.post(EXPERT_API_URL, params, { headers }).then(callback).catch((e) => console.log(e));
  };
}

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
    type: TOPUSERTWEETS_ADD_PROCESSING,
    user
  };
}

export function completeProcessUser(user) {
  return {
    type: TOPUSERTWEETS_REMOVE_PROCESSING,
    user
  };
}

export function onMarkFakeUser(user) {
  return {
    type: TOPUSERTWEETS_MARK_AS_FAKE,
    user
  };
}

export function onUnmarkFakeUser(user) {
  return {
    type: TOPUSERTWEETS_UNMARK_AS_FAKE,
    user
  };
}
