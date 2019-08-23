export const TARGET_URL = 'http://18.222.110.159:8080/get_results/';
export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const BODY_POST = {
  results_names_list: [
    'hashtags',
    'tweets_count_ts',
    'top_favorite_tweets',
    'top_news_tw',
    'top_rtweets',
    'top_favorite_tweets'
  ],
  dates: ['2019-08-06', '2019-08-07'],
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
  }
};
export const SET_HASHTAGS_DATA = 'SET_HASHTAGS_DATA';
export const SET_KEYWORD_DATA = 'SET_KEYWORD_DATA';
export const TOP_NEWS_DATA = 'TOP_NEWS_DATA';
export const TOP_RETWEETED_NEWS = 'TOP_RETWEETED_NEWS';
export const TOP_FAVORITE_TWEETS_DATA = 'TOP_FAVORITE_TWEETS_DATA';
export const TWEETS_COUNT_TS_DATA = 'TWEETS_COUNT_TS_DATA';
export const GET_USER_CREDENTIALS = 'GET_USER_CREDENTIALS';
export const SET_SELECTED_INFLUENCER = 'SET_SELECTED_INFLUENCER';
export const REGEXP_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
