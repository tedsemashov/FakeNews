import axios from 'axios';
import { EXPERT_API_URL, EXPERT_BODY_POST, EXPERT_SET_DATA, TRAIN_MODEL_BODY, NEED_TRAIN_MODEL } from "../constants";
import { setLoadingState, setFlashMessage } from "../actions";

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

export function trainModel({dates}) {
  return (dispatch) => {
    dispatch(setLoadingState(false));

    axios.post(EXPERT_API_URL,
      {...TRAIN_MODEL_BODY, dates },
      {headers: {'Content-Type': 'application/json'}}
    ).then(({ data }) => {
      if(data.result_code === "Ok") {
        dispatch(needTrainModel(false));
        dispatch(setFlashMessage(data.result_info));
      } else {
        dispatch(setFlashMessage("Something is wrong! Please try again later."));
      }
    }).catch((error) => console.log(error));

    dispatch(setLoadingState(true));
  };
}

export function setExpertsData(data) {
  return {
    type: EXPERT_SET_DATA,
    ...data
  };
}

export function needTrainModel(data) {
  return {
    type: NEED_TRAIN_MODEL,
    needTrainModel: data
  };
}
