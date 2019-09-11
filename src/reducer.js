import _ from "lodash";
import moment from "moment";

import * as constants from './constants';

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
  fn_users: []
};

const initialState = {
  ...expertInitialState,
  user: {
    email: 'test@test.com',
    password: '1234',
    name: 'John',
    surname: 'McCarthy'
  },
  timePeriod: '',
  dates: [
    moment().subtract(1, 'week').format("YYYY-MM-DD"),
    moment().format("YYYY-MM-DD")
  ],
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

  selectedInfluencer: '',
  selectedMentionedUser: '',
  selectedTroll: '',
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
        keyword: action.keyword
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
    case constants.DATES:
      return {
        ...state,
        dates: action.dates
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
      const { type, ...data } = action;

      return {
        ...state,
        ...data
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
    default:
      return state;
  }
};

export default rootReducer;
