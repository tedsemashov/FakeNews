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
  keyword: "Ukraine",
  hashtags: {
    n_hashtags: 20
  },
  tweets_count_ts: {
    ts_size_freq: "H"
  },
  top_news_tw: {
    min_tweets_count: 5,
    top_news_tweets_count: 5
  },
  top_rtweets: {
    min_tweets_count: 5,
    top_rt_count: 5
  },
  top_favorite_tweets: {
    n_top_fav_tw: 10
  },
  top_influencers: {
    n_top_users: 5,
    n_usr_tw: 5
  },
  top_favorite_tw_users: {
    n_top_users: 5,
    n_usr_tw: 5
  },
  top_active_users: {
    n_top_users: 5,
    n_usr_tw: 5
  },
  top_rt_m_usr: {
    top_rt_users_count: 30,
    min_rt_count: 3,
    max_tw_top_usr: 5
  },
  top_fnews_tw: {
    min_tweets_count: 3,
    top_fnews_tweets_count: 10,
    max_top_tw_n: 25
  },
  top_fn_rtweets: {
    min_tweets_count: 25,
    top_rt_count: 10,
    max_top_tw_n: 100
  },
  top_rt_fn_usr: {
    top_rt_users_count: 5,
    min_rt_count: 3,
    min_user_rt_count: 3,
    max_rt_top_usr: 5,
    top_fn_users: 10
  },
  top_fn_usr: {
    n_usr_tw: 5,
    n_fn_users: 10
  },
  fn_tw_count_ts: {
    freq: "H",
    fn_prob_thr: 0.7
  },
  fn_tw_prob_mean_ts: {
    freq: "H"
  }
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
