import axios from 'axios';
import _ from 'lodash';
import * as constants from '../constants';
import { expertsConstants } from '../constants';
import { setLoadingState } from '../actions'

export function getExpertsData() {
  return dispatch => {
    axios.post(constants.expertsConstants.EXPERTS_INFO_URL,
      expertsConstants.EXPERT_BODY_POST,
      {headers: {'Content-Type': 'application/json'}}
    ).then((response) => {
      const data = response.data;
      dispatch(setExpertsData(response.data));
      dispatch(setLoadingState('true'));
    })
  }
};

export const setExpertsData = data => {
  return {
    type: expertsConstants.SET_EXPERT_DATA,
    ...data
  };
};
