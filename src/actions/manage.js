import {SET_MANAGE_DATA} from "../constants/manage";
import { setLoadingState } from "../actions";

export function fetchManageData(options = {}) {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    dispatch(setManageData({}));
  };
}

export function setManageData(data) {
  return {
    type: SET_MANAGE_DATA,
    data
  };
}
