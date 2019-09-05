export const EXPERT_API_URL = "http://18.222.110.159:8080/exp_ml/";

// API DATA BODY DEFAULT;
export const EXPERT_BODY_POST = {
  keyword: "",
  dates: ["2019-09-01", "2019-09-04"],
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
};

// events;
export const EXPERT_SET_DATA = "SET_EXPERT_DATA";
