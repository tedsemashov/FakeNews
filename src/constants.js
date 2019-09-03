export const TARGET_URL = 'http://18.222.110.159:8080/get_results/';
export const EXPERTS_INFO_URL = 'http://18.222.110.159:8080/exp_ml/';
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
  dates: ['2019-08-23', '2019-08-24'],
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

export const EXPERT_BODY_POST = {
  keyword: "",
  dates: ["2019-07-01", "2019-08-07"],
  top_news_tw_ml: {
    min_tweets_count: 3,
    top_news_tweets_count: 10
  },
  top_rtweets_ml: {
    min_tweets_count: 3,
    top_rt_count: 25
  },
  top_users_tw: {
    top_users_count: 30,
    max_tw_top_usr: 10
  },
  top_rt_users_tw: {
    top_rt_users_count: 30,
     min_rt_count: 3,
     max_tw_top_usr: 5
   },
  tw_user_filter: {
   min_user_followers: 100,
   min_user_favorites: 10,
   min_user_tw_count: 3,
   min_retweet_count: 1
 },
 request_type: "get_exp_tw_labeling"
}

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
export const TIME_PERIOD = 'TIME_PERIOD';
export const TOP_NEWS_LIST = 'TOP_NEWS_LIST';
export const TOP_RTWEETS = 'TOP_RTWEETS';
export const TOP_RT_USERS_TW = 'TOP_RT_USERS_TW';
export const TOP_USERS_TWEETS = 'TOP_USERS_TWEETS';
export const FAKE_NEWS_USERS = 'FAKE_NEWS_USERS';
export const REGEXP_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
