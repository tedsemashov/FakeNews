// expert constants;
export * from "./constants/expertsConstants";

// analytics constants;
export const TARGET_URL = "http://18.191.23.167:8080/get_results/";
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
export const BODY_POST = {
  results_names_list: [
    "hashtags",
    "tweets_count_ts",
    "top_news_tw",
    "top_rtweets",
    "top_favorite_tweets",
    "top_influencers",
    // "top_favorite_tw_users",
    // "top_active_users",
    "top_rt_m_usr",
    "top_fnews_tw",
    "top_fn_rtweets",
    // "top_rt_fn_usr",
    "top_fn_usr",
    "fn_tw_count_ts",
    "fn_tw_prob_mean_ts"
  ],
  dates: [], //["2019-08-23", "2019-08-24"]
  keyword: ""
};

export const KEYWORD_DATA = "KEYWORD_DATA";
export const LOADING_STATE = "LOADING_STATE";
export const TIME_PERIOD = "TIME_PERIOD";
export const FILTERS_ON_CHANGE = "FILTERS_ON_CHANGE";
export const LOGIN_USER_LOG_OUT = "LOGIN_USER_LOG_OUT";
export const LOGIN_USER_LOG_IN = "LOGIN_USER_LOG_IN";
export const SET_ANALYTICS_DATA = "SET_ANALYTICS_DATA";
