export const EXPERT_API_URL = "http://18.222.107.208:8080/exp_ml/";

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

export const SAVE_LABELS_BODY = {
  news_id_fn: [],
  rt_id_fn: [],
  fn_users: [],
  rm_fn_users: [],
  rm_id_fn: [],
  request_type: "save_labels"
};

export const TRAIN_MODEL_BODY = {
  dates: [],
  request_type: "train_model"
};

// events;
export const EXPERT_SET_DATA = "SET_EXPERT_DATA";
export const TOPUSERTWEETS_MARK_AS_FAKE = "TOPUSERTWEETS_MARK_AS_FAKE";
export const TOPUSERTWEETS_ADD_PROCESSING = "TOPUSERTWEETS_ADD_PROCESSING";
export const TOPUSERTWEETS_REMOVE_PROCESSING = "TOPUSERTWEETS_REMOVE_PROCESSING";
export const TOPUSERTWEETS_UNMARK_AS_FAKE = "TOPUSERTWEETS_UNMARK_AS_FAKE";
export const TOPMENTIONEDUSERSRETWEETS_ADD_PROCESSING = "TOPMENTIONEDUSERSRETWEETS_ADD_PROCESSING";
export const TOPMENTIONEDUSERSRETWEETS_MARK_AS_FAKE = "TOPMENTIONEDUSERSRETWEETS_MARK_AS_FAKE";
export const TOPMENTIONEDUSERSRETWEETS_REMOVE_PROCESSING = "TOPMENTIONEDUSERSRETWEETS_REMOVE_PROCESSING";
export const TOPMENTIONEDUSERSRETWEETS_UNMARK_AS_FAKE = "TOPMENTIONEDUSERSRETWEETS_UNMARK_AS_FAKE";
export const MANIPULATORS_ADD_PROCESSING = "MANIPULATORS_ADD_PROCESSING";
export const MANIPULATORS_REMOVE_PROCESSING = "MANIPULATORS_REMOVE_PROCESSING";
export const MANIPULATORS_UNMARK_FAKE = "MANIPULATORS_UNMARK_FAKE";
export const TOPNEWS_TOGGLE_FAKE_STATUS = "TOPNEWS_TOGGLE_FAKE_STATUS"
export const TOPNEWS_ADD_PROCESSING = "TOPNEWS_ADD_PROCESSING"
export const TOPNEWS_REMOVE_PROCESSING = "TOPNEWS_REMOVE_PROCESSING"
export const TOPRETWEETEDNEWS_TOGGLE_FAKE_STATUS = "TOPRETWEETEDNEWS_TOGGLE_FAKE_STATUS"
export const TOPRETWEETEDNEWS_ADD_PROCESSING = "TOPRETWEETEDNEWS_ADD_PROCESSING"
export const TOPRETWEETEDNEWS_REMOVE_PROCESSING = "TOPRETWEETEDNEWS_REMOVE_PROCESSING"
export const NEED_TRAIN_MODEL = "NEED_TRAIN_MODEL"
export const FLASH_MESSAGE = "FLASH_MESSAGE"
