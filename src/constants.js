// expert constants;
export * from "./constants/expertsConstants";

// analytics constants;
export const TARGET_URL = "http://18.222.107.208:8080/get_results/";
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
export const BODY_POST = {
  results_names_list: [
    "hashtags",
    "tweets_count_ts",
    "top_news_tw",
    "top_rtweets",
    "top_favorite_tweets",
    "top_influencers",
    "top_favorite_tw_users",
    "top_active_users",
    "top_rt_m_usr",
    "top_fnews_tw",
    "top_fn_rtweets",
    "top_rt_fn_usr",
    "top_fn_usr",
    "fn_tw_count_ts",
    "fn_tw_prob_mean_ts"
  ],
  dates: [], //["2019-08-23", "2019-08-24"]
  keyword: ""
};

export const HASHTAGS_DATA = "HASHTAGS_DATA";
export const KEYWORD_DATA = "KEYWORD_DATA";
export const TOP_NEWS_DATA = "TOP_NEWS_DATA";
export const TOP_RETWEETED_NEWS = "TOP_RETWEETED_NEWS";
export const TOP_FAVORITE_TWEETS_DATA = "TOP_FAVORITE_TWEETS_DATA";
export const TWEETS_COUNT_TS_DATA = "TWEETS_COUNT_TS_DATA";
export const TOP_INFLUENCERS = "TOP_INFLUENCERS";
export const TOP_FAVORITED_USERS ="TOP FAVORITED USERS"
export const TOP_MENTIONED_USERS = "TOP_MENTIONED_USERS";
export const GET_USER_CREDENTIALS = "GET_USER_CREDENTIALS";
export const SELECTED_INFLUENCER = "SELECTED_INFLUENCER";
export const MENTIONED_USER = "MENTIONED_USER";
export const LOADING_STATE = "LOADING_STATE";
export const TIME_PERIOD = "TIME_PERIOD";
export const REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const FILTERS_ON_CHANGE = "FILTERS_ON_CHANGE";
export const LOGIN_USER_LOG_OUT = "LOGIN_USER_LOG_OUT";
export const LOGIN_USER_LOG_IN = "LOGIN_USER_LOG_IN";

export const SET_TOP_RT_M_USR="SET_TOP_RT_M_USR"; // top_rt_m_usr
export const SET_TOP_FNEWS_TW="SET_TOP_FNEWS_TW"; // top_fnews_tw
export const SET_TOP_FN_RTWEETS="SET_TOP_FN_RTWEETS"; // top_fn_rtweets
export const SET_TOP_RT_FN_USR="SET_TOP_RT_FN_USR"; // top_rt_fn_usr
export const SET_TOP_FN_USR="SET_TOP_FN_USR"; // top_fn_usr
export const SET_FN_TW_COUNT_TS="SET_FN_TW_COUNT_TS"; // fn_tw_count_ts
export const SET_FN_TW_PROB_MEAN_TS="SET_FN_TW_PROB_MEAN_TS"; // fn_tw_prob_mean_ts
