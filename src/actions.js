import axios from "axios";
import { convertToDates } from "./components/subheader/Subheader";

import * as constants from './constants';

export const getTwitterData = ({ timePeriod, ...params }) => {
  return (dispatch) => {
    const dates = convertToDates(timePeriod);
    const headers = { "Content-Type": "application/json" };

    axios.post(constants.TARGET_URL, {...constants.BODY_POST, ...params, dates}, { headers })
      .then(({ data }) => {
        dispatch(setLoadingState(true));
        dispatch(setAnalyticsData(data));
      });
  }
};

export const setKeywordData = keyword => {  
  return {  
    type: constants.KEYWORD_DATA, 
    keyword 
  };  
};

export const setAnalyticsData = (data) => {
  return {
    type: constants.SET_ANALYTICS_DATA,
    data
  };
};

export const setLoadingState = loadingState => {
  return {
    type: constants.LOADING_STATE,
    isLoaded: loadingState
  };
};

export const userLogOut = () => {
  return {
    type: constants.LOGIN_USER_LOG_OUT
  };
};

export const logInUser = (user) => {
  return {
    type: constants.LOGIN_USER_LOG_IN,
    user: user
  };
};

export * from "./actions/expert";
export * from "./actions/filters";
export * from "./actions/flashMessage";
export * from "./actions/reports";
export * from "./actions/manage";
