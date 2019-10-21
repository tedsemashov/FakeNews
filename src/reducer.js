import _ from "lodash";

import * as constants from './constants';
import { DEFAULT_KEYWORD } from "./components/subheader/search-input/Search";
import { DEFAULT_PERIOD } from "./components/subheader/Subheader";

const USER_SESSION_KEY = "currentUser";

export function convertToUserMention(username) {
  if(!username) return "";

  return username.charAt(0) === "@" ? username : `@${username}`;
}

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

export const initialState = {
  ...expertInitialState,
  user: {
    email: 'test@test.com',
    password: '1234',
    name: 'John',
    surname: 'McCarthy'
  },
  userLoggedIn: !_.isEmpty(localStorage.getItem(USER_SESSION_KEY)),
  timePeriod: DEFAULT_PERIOD,
  hashtags: {},
  keyword: DEFAULT_KEYWORD,
  top_favorite_tweets: [],
  tweets_count_ts: {},
  kw_links: [],
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

  top_favorite_tw_users: {},
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
    case constants.SET_ANALYTICS_DATA:
      const selectedInfluencer = convertToUserMention(Object.keys(_.get(action, "data.top_influencers", {}))[0]);
      const selectedMentionedUser = convertToUserMention(Object.keys(_.get(action, "data.top_active_users", {}))[0]);

      return {
        ...state,
        hashtags: _.get(action, "data.hashtags", initialState.hashtags),
        top_favorite_tweets: _.get(action, "data.top_favorite_tweets", initialState.top_favorite_tweets),
        tweets_count_ts: _.get(action, "data.tweets_count_ts", initialState.tweets_count_ts),
        topNews: _.get(action, "data.top_news_tw", initialState.topNews),
        topRetweetedNews: _.get(action, "data.top_rtweets", initialState.topRetweetedNews),
        topInfluencers: _.get(action, "data.top_influencers", initialState.topInfluencers),
        // top_favorite_tw_users: _.get(action, "data.top_favorite_tw_users", initialState.top_favorite_tw_users),
        // topMentionedUsers: _.get(action, "data.top_active_users", initialState.topMentionedUsers),
        selectedInfluencer,
        selectedMentionedUser,
        top_rt_m_usr: _.get(action, "data.top_rt_m_usr", initialState.top_rt_m_usr),
        top_fnews_tw: _.get(action, "data.top_fnews_tw", initialState.top_fnews_tw),
        top_fn_rtweets: _.get(action, "data.top_fn_rtweets", initialState.top_fn_rtweets),
        // top_rt_fn_usr: _.get(action, "data.top_rt_fn_usr", initialState.top_rt_fn_usr),
        top_fn_usr: _.get(action, "data.top_fn_usr", initialState.top_fn_usr),
        fn_tw_count_ts: _.get(action, "data.fn_tw_count_ts", initialState.fn_tw_count_ts),
        fn_tw_prob_mean_ts: _.get(action, "data.fn_tw_prob_mean_ts", initialState.fn_tw_prob_mean_ts),
        kw_links: _.get(action, "data.kw_links", initialState.kw_links)
      };
    case constants.EXPERT_SET_DATA:
      return {
        ...state,
        top_news: _.get(action, 'top_news', []),
        top_rtweets: _.get(action, 'top_rtweets', {}),
        top_rt_users_tw: _.get(action, 'top_rt_users_tw', {}),
        top_users_tw: _.get(action, 'top_users_tw', {}),
        fn_users: _.get(action, 'fn_users', []),
        kw_links: []
      };
    case constants.KEYWORD_DATA:
      return {
        ...state,
        keyword: _.get(_.isEmpty(action.keyword) ? initialState : action, "keyword")
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
    default:
      return state;
  }
};

export default rootReducer;
