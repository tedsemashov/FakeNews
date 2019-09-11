import axios from 'axios';
import { EXPERT_API_URL, EXPERT_BODY_POST, EXPERT_SET_DATA } from "../constants";
import { setLoadingState } from "../actions";

export function getExpertsData({dates, keyword}) {
  return (dispatch) => {
    axios.post(EXPERT_API_URL,
      {...EXPERT_BODY_POST, dates, keyword},
      {headers: {'Content-Type': 'application/json'}}
    ).then(({ data }) => {
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
