import axios from "axios";

import {
  EXPERT_API_URL, SAVE_LABELS_BODY, TOPRETWEETEDNEWS_TOGGLE_FAKE_STATUS,
   TOPRETWEETEDNEWS_ADD_PROCESSING, TOPRETWEETEDNEWS_REMOVE_PROCESSING
} from "../constants/expertsConstants";

export function apiToggleTopReTweetedNewsFakeStatus(news) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, news_id_fn: [news.id_txt] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      if(data.result_code === "Ok") {
        news.checked = news.checked === 1 ? 0 : 1
        dispatch(toggleTopReTweetedNewsFakeStatus(news));
      }

      dispatch(completeProcessTopReTweetedNews(news.id_txt));
    };

    // perform request;
    axios.post(EXPERT_API_URL, params, { headers }).then(callback).catch((e) => console.log(e));
  };
}

export function processTopReTweetedNews(newsId) {
  return {
    type: TOPRETWEETEDNEWS_ADD_PROCESSING,
    newsId
  };
}

export function completeProcessTopReTweetedNews(newsId) {
  return {
    type: TOPRETWEETEDNEWS_REMOVE_PROCESSING,
    newsId
  };
}

export function toggleTopReTweetedNewsFakeStatus(news) {
  return {
    type: TOPRETWEETEDNEWS_TOGGLE_FAKE_STATUS,
    news
  };
}
