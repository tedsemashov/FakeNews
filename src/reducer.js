import _ from "lodash";

import * as constants from './constants';

const USER_SESSION_KEY = "currentUser";

const expertInitialState = {
  // manipulations;
  topMentionedUsersReTweetsProcessing: [],
  topUserTweetsProcessing: [],
  manipulatorsProcessing: [],
  topNewsProcessing: [],
  topReTweetedNewsProcessing: [],

  // API;
  top_news: [],
  top_rtweets: {},
  top_rt_users_tw: {},
  top_users_tw: {},
  fn_users: [],

  needTrainModel: false
};

const initialState = {
  ...expertInitialState,
  user: {
    email: 'test@test.com',
    password: '1234',
    name: 'John',
    surname: 'McCarthy'
  },
  userLoggedIn: !_.isEmpty(localStorage.getItem(USER_SESSION_KEY)),
  timePeriod: 'LAST WEEK',
  hashtags: {},
  keyword: "ukraine",
  top_favorite_tweets: [],
  tweets_count_ts: {},
  fakeUsers: [
    {
      title: 'Trolls',
      amount: 19
    },
    {
      title: 'Real users',
      amount: 81
    }
  ],
  fakeNews: [
    {
      title: 'Fake',
      amount: 34
    },
    {
      title: 'Official',
      amount: 66
    }
  ],

  fakeData: [
    {
      title: 'Ukr',
      amount: 55
    },
    {
      title: 'Foreign',
      amount: 45
    }
  ],

  topRetweetedNews: [],

  topNews: [],

  topInfluencers: [],
  topMentionedUsers: [],

  top_rt_m_usr: {},
  top_fnews_tw: [],
  top_fn_rtweets: [],
  top_rt_fn_usr: {},
  top_fn_usr: {},
  fn_tw_count_ts: {},
  fn_tw_prob_mean_ts: {},

  selectedInfluencer: '',
  selectedMentionedUser: '',
  selectedTroll: '',
  flashMessage: "",
  isLoaded: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.HASHTAGS_DATA:
      return {
        ...state,
        hashtags: action.hashtags
      };
    case constants.KEYWORD_DATA:
      return {
        ...state,
        keyword: _.get(_.isEmpty(action.keyword) ? initialState : action, "keyword")
      };
    case constants.TOP_FAVORITE_TWEETS_DATA:
      return {
        ...state,
        top_favorite_tweets: action.top_favorite_tweets
      };
    case constants.TWEETS_COUNT_TS_DATA:
      return {
        ...state,
        tweets_count_ts: action.tweets_count_ts
      };
    case constants.SELECTED_INFLUENCER:
      return {
        ...state,
        selectedInfluencer: action.value
      };
    case constants.MENTIONED_USER:
      return {
        ...state,
        selectedMentionedUser: action.value
      };
    case constants.TOP_NEWS_DATA:
      return {
        ...state,
        topNews: action.topNews
      };
    case constants.TOP_RETWEETED_NEWS:
      return {
        ...state,
        topRetweetedNews: action.topRetweetedNews
      };
    case constants.LOADING_STATE:
      return {
        ...state,
        isLoaded: action.isLoaded
      };
    case constants.TIME_PERIOD:
      return {
        ...state,
        timePeriod: action.timePeriod
      };
    case constants.TOP_INFLUENCERS:
      return {
        ...state,
        topInfluencers: action.topInfluencers
      };
    case constants.TOP_MENTIONED_USERS:
      return {
        ...state,
        topMentionedUsers: action.topMentionedUsers
      };
    case constants.EXPERT_SET_DATA:
      return {
        ...state,
        top_news: _.get(action, 'top_news', []),
        top_rtweets: _.get(action, 'top_rtweets', {}),
        top_rt_users_tw: _.get(action, 'top_rt_users_tw', {}),
        top_users_tw: _.get(action, 'top_users_tw', {}),
        fn_users: _.get(action, 'fn_users', []),
      };
    case constants.TOPUSERTWEETS_MARK_AS_FAKE:
      return {
        ...state,
        fn_users: [...state.fn_users, action.user]
      };
    case constants.TOPUSERTWEETS_UNMARK_AS_FAKE:
      return {
        ...state,
        fn_users: _.reject(state.fn_users, (e) => e === action.user)
      };
    case constants.TOPUSERTWEETS_ADD_PROCESSING:
      return {
        ...state,
        topUserTweetsProcessing: [...state.topUserTweetsProcessing, action.user]
      };
    case constants.TOPUSERTWEETS_REMOVE_PROCESSING:
      return {
        ...state,
        topUserTweetsProcessing: _.reject(state.topUserTweetsProcessing, (e) => e === action.user)
      };
    case constants.TOPMENTIONEDUSERSRETWEETS_MARK_AS_FAKE:
      return {
        ...state,
        fn_users: [...state.fn_users, action.user]
      };
    case constants.TOPMENTIONEDUSERSRETWEETS_UNMARK_AS_FAKE:
      return {
        ...state,
        fn_users: _.reject(state.fn_users, (e) => e === action.user)
      };
    case constants.TOPMENTIONEDUSERSRETWEETS_ADD_PROCESSING:
      return {
        ...state,
        topMentionedUsersReTweetsProcessing: [...state.topMentionedUsersReTweetsProcessing, action.user]
      };
    case constants.TOPMENTIONEDUSERSRETWEETS_REMOVE_PROCESSING:
      return {
        ...state,
        topMentionedUsersReTweetsProcessing: _.reject(state.topMentionedUsersReTweetsProcessing, (e) => e === action.user)
      };
    case constants.MANIPULATORS_ADD_PROCESSING:
      return {
        ...state,
        manipulatorsProcessing: [...state.manipulatorsProcessing, action.user]
      };
    case constants.MANIPULATORS_REMOVE_PROCESSING:
      return {
        ...state,
        manipulatorsProcessing: _.reject(state.manipulatorsProcessing, (e) => e === action.user)
      };
    case constants.MANIPULATORS_UNMARK_FAKE:
      return {
        ...state,
        fn_users: _.reject(state.fn_users, (e) => e === action.user)
      };

    case constants.TOPNEWS_TOGGLE_FAKE_STATUS:
      return {
        ...state,
        top_news: _.map(state.top_news, (e) => e.id_txt === action.news.id_txt ? action.news : e )
      };
    case constants.TOPNEWS_ADD_PROCESSING:
      return {
        ...state,
        topNewsProcessing: [...state.topNewsProcessing, action.newsId]
      };
    case constants.TOPNEWS_REMOVE_PROCESSING:
      return {
        ...state,
        topNewsProcessing: _.reject(state.topNewsProcessing, (e) => e === action.newsId)
      };

    case constants.TOPRETWEETEDNEWS_TOGGLE_FAKE_STATUS:
      return {
        ...state,
        top_rtweets: _.map(state.top_rtweets, (e) => e.id_txt === action.news.id_txt ? action.news : e )
      };
    case constants.TOPRETWEETEDNEWS_ADD_PROCESSING:
      return {
        ...state,
        topReTweetedNewsProcessing: [...state.topReTweetedNewsProcessing, action.newsId]
      };
    case constants.TOPRETWEETEDNEWS_REMOVE_PROCESSING:
      return {
        ...state,
        topReTweetedNewsProcessing: _.reject(state.topReTweetedNewsProcessing, (e) => e === action.newsId)
      };
    case constants.FILTERS_ON_CHANGE:
      return {
        ...state,
        timePeriod: action.timePeriod,
        keyword: action.keyword
      };

    case constants.NEED_TRAIN_MODEL:
      return {
        ...state,
        needTrainModel: action.needTrainModel
      };
    case constants.FLASH_MESSAGE:
      return {
        ...state,
        flashMessage: action.flashMessage
      };
    case constants.LOGIN_USER_LOG_OUT:
      localStorage.removeItem(USER_SESSION_KEY);

      return {
        ...state,
        userLoggedIn: false
      };
    case constants.LOGIN_USER_LOG_IN:
      localStorage.setItem(USER_SESSION_KEY, action.user.email);

      return {
        ...state,
        userLoggedIn: true
      };
    case constants.SET_TOP_RT_M_USR:
      return {
        ...state,
        top_rt_m_usr: action.top_rt_m_usr
      };
    case constants.SET_TOP_FNEWS_TW:
      return {
        ...state,
        top_fnews_tw: action.top_fnews_tw
      };
    case constants.SET_TOP_FN_RTWEETS:
      return {
        ...state,
        top_fn_rtweets: action.top_fn_rtweets
      };
    case constants.SET_TOP_RT_FN_USR:
      return {
        ...state,
        top_rt_fn_usr: action.top_rt_fn_usr
      };
    case constants.SET_TOP_FN_USR:
      return {
        ...state,
        top_fn_usr: action.top_fn_usr
      };
    case constants.SET_FN_TW_COUNT_TS:
      return {
        ...state,
        fn_tw_count_ts: action.fn_tw_count_ts
      };
    case constants.SET_FN_TW_PROB_MEAN_TS:
      return {
        ...state,
        fn_tw_prob_mean_ts: action.fn_tw_prob_mean_ts
      };
    default:
      return state;
  }
};

export default rootReducer;
