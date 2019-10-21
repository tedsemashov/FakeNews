import {SET_REPORTS_DATA} from "./../constants/reports";
import {setLoadingState} from "../actions";

export function fetchReportsData(options = {}) {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    dispatch(setReportsData({}));
  }
}

export function setReportsData(data) {
  return {
    type: SET_REPORTS_DATA,
    data
  };
}
