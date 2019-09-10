import moment from "moment";

// expert constants;
export * from "./constants/expertsConstants";

// analytics constants;
export const TARGET_URL = 'http://18.222.110.159:8080/get_results/';
export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const BODY_POST = {
  results_names_list: [
    'hashtags',
    'tweets_count_ts',
    'top_news_tw',
    'top_rtweets',
    'top_favorite_tweets',
    'top_influencers',
    'top_favorite_tw_users',
    'top_active_users'
  ],
  dates: [moment().add(-1, 'week').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')],
  keyword: 'Ukraine',
  hashtags: {
    n_hashtags: 20
  },
  tweets_count_ts: {
    ts_size_freq: 'H'
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
  }
};

export const HASHTAGS_DATA = 'HASHTAGS_DATA';
export const KEYWORD_DATA = 'KEYWORD_DATA';
export const TOP_NEWS_DATA = 'TOP_NEWS_DATA';
export const TOP_RETWEETED_NEWS = 'TOP_RETWEETED_NEWS';
export const TOP_FAVORITE_TWEETS_DATA = 'TOP_FAVORITE_TWEETS_DATA';
export const TWEETS_COUNT_TS_DATA = 'TWEETS_COUNT_TS_DATA';
export const TOP_INFLUENCERS = 'TOP_INFLUENCERS';
export const TOP_MENTIONED_USERS = 'TOP_MENTIONED_USERS';
export const GET_USER_CREDENTIALS = 'GET_USER_CREDENTIALS';
export const SELECTED_INFLUENCER = 'SELECTED_INFLUENCER';
export const MENTIONED_USER = 'MENTIONED_USER';
export const LOADING_STATE = 'LOADING_STATE';
export const DATES = 'DATES';
export const TIME_PERIOD = 'TIME_PERIOD';
export const REGEXP_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
