import * as constants from './constants';

// const initialState = {
//    hashtags: {},
//    keyword: '',
//    top_favorite_tweets: [],
//    tweets_count_ts: {},
//    user: {
//       email: 'test@test.com',
//       password: '1234',
//       name: 'Name',
//       surname: 'Surname'
//    },
// };

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
    case constants.SET_SELECTED_INFLUENCER:
      return {
        ...state,
        selectedInfluencer: action.value
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
    default:
      return state;
  }
};

const initialState = {
  user: {
    email: 'test@test.com',
    password: '1234',
    name: 'John',
    surname: 'McCarthy'
  },
  timePeriod: '1 DAY',
  hashtags: {},
  keyword: '',
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

  topInfluencers: {},

  selectedInfluencer: '',
  isLoaded: false
};

export default rootReducer;
