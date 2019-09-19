import axios from "axios";

import {
  EXPERT_API_URL, SAVE_LABELS_BODY, TOPNEWS_TOGGLE_FAKE_STATUS,
   TOPNEWS_ADD_PROCESSING, TOPNEWS_REMOVE_PROCESSING
} from "../constants/expertsConstants";

export function apiToggleTopNewsFakeStatus(news) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, news_id_fn: [news.id_txt] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      if(data.result_code === "Ok") {
        news.checked = news.checked === 1 ? 0 : 1
        dispatch(toggleTopNewsFakeStatus(news));
      }

      dispatch(completeProcessTopNews(news.id_txt));
    };

    // perform request;
    axios.post(EXPERT_API_URL, params, { headers }).then(callback).catch((e) => console.log(e));
  };
}

export function processTopNews(newsId) {
  return {
    type: TOPNEWS_ADD_PROCESSING,
    newsId
  };
}

export function completeProcessTopNews(newsId) {
  return {
    type: TOPNEWS_REMOVE_PROCESSING,
    newsId
  };
}

export function toggleTopNewsFakeStatus(news) {
  return {
    type: TOPNEWS_TOGGLE_FAKE_STATUS,
    news
  };
}
