import axios from "axios";

import {
  EXPERT_API_URL, SAVE_LABELS_BODY, TOPNEWS_MARK_AS_FAKE, TOPNEWS_UNMARK_AS_FAKE,
   TOPNEWS_ADD_PROCESSING, TOPNEWS_REMOVE_PROCESSING
} from "../constants/expertsConstants";

export function apiMarkFakeTopNews(news) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, news_id_fn: [news.id_txt] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      if(data.result_code === "Ok") {
        news.checked = 1;
        dispatch(onMarkFakeTopNews(news));
      }

      dispatch(completeProcessTopNews(news.id_txt));
    };

    // perform request;
    axios.post(EXPERT_API_URL, params, { headers }).then(callback).catch((e) => console.log(e));
  };
}

export function apiUnmarkFakeTopNews(news) {
  return (dispatch) => {
    const params = { ...SAVE_LABELS_BODY, rm_id_fn: [news.id_txt] };
    const headers = { "Content-Type": "application/json" };
    const callback = ({ data }) => {
      if (data.result_code === "Ok") {
        news.checked = 0;
        dispatch(onUnmarkFakeTopNews(news));
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

export function onMarkFakeTopNews(news) {
  return {
    type: TOPNEWS_MARK_AS_FAKE,
    news
  };
}

export function onUnmarkFakeTopNews(news) {
  return {
    type: TOPNEWS_UNMARK_AS_FAKE,
    news
  };
}
