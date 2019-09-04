export const EXPERTS_INFO_URL = 'http://18.222.110.159:8080/exp_ml/';
export const TOP_NEWS_LIST = 'TOP_NEWS_LIST';
export const TOP_RTWEETS = 'TOP_RTWEETS';
export const TOP_RT_USERS_TW = 'TOP_RT_USERS_TW';
export const TOP_USERS_TWEETS = 'TOP_USERS_TWEETS';
export const FAKE_NEWS_USERS = 'FAKE_NEWS_USERS';

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
