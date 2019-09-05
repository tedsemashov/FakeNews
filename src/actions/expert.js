import axios from 'axios';
import _ from 'lodash';
import * as constants from '../constants';
import { expertsConstants } from '../constants';
import { setLoadingState } from '../actions'

export function getExpertsData() {
  return dispatch => {
    axios.post(expertsConstants.EXPERTS_INFO_URL,
      expertsConstants.EXPERT_BODY_POST,
      {headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      console.log(response);
      const data = response.data;
      dispatch(setExpertsData(response.data));
      dispatch(setLoadingState(true));
    }).catch(error => {
      console.log(error)
    });
  }
};

export const setExpertsData = data => {
  return {
    type: expertsConstants.SET_EXPERT_DATA,
    ...data
  };
};
