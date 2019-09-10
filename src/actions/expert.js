import axios from 'axios';
import { EXPERT_API_URL, EXPERT_BODY_POST, EXPERT_SET_DATA } from "../constants";
import { setLoadingState } from "../actions";

export function getExpertsData() {
  return (dispatch) => {
    axios.post(EXPERT_API_URL,
      EXPERT_BODY_POST,
      {headers: {'Content-Type': 'application/json'}}
    ).then(({ data }) => {
      debugger;
      dispatch(setExpertsData(data));
      dispatch(setLoadingState(true));
    }).catch((error) => console.log(error));
  }
}

export function setExpertsData(data) {
  return {
    type: EXPERT_SET_DATA,
    ...data
  };
}
