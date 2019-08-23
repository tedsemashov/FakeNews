import *as constants from './constants';

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
    case constants.SET_HASHTAGS_DATA:
      return {
        ...state,
        hashtags: action.hashtags
      };
    case constants.SET_KEYWORD_DATA:
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
      }
    case constants.TIME_PERIOD:
      return {
        ...state,
        timePeriod: action.timePeriod
      }
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

  fakeData: [{
    "title": "Ukr",
    "amount": 55
  }, {
    "title": "Foreign",
    "amount": 45
  }],

  topRetweetedNews: [],

  topNews: [],

  top_influencers: {
    historylvrsclub: {
      user_followers_count: 508172.0,
      user_statuses_count: 225425.0,
      user_profile_image_url:
        'http://pbs.twimg.com/profile_images/1111759052328091648/XUOR5x4R_normal.png',
      user_name: 'History Lovers Club',
      user_place_country: NaN,
      user_place_full_name: NaN,
      top_tweets: [
        {
          date: '2019-07-30 23:50:01',
          favorite_count: 19.0,
          user_followers_count: 508172.0,
          id: 1156351272305516544,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/1111759052328091648/XUOR5x4R_normal.png',
          screen_name: 'historylvrsclub',
          text:
            'Parade of the Polish Army in Lviv Ukraine (between 1920 and 1930). See more pics: https://t.co/vvzbcvf4Gv https://t.co/Z5GKnFLSGs',
          user_name: 'History Lovers Club',
          user_verified: false
        }
      ]
    },
    KyivPost: {
      user_followers_count: 181266.0,
      user_statuses_count: 43109.0,
      user_profile_image_url:
        'http://pbs.twimg.com/profile_images/833622521777946625/MqPTETnC_normal.jpg',
      user_name: 'Kyiv Post',
      user_place_country: NaN,
      user_place_full_name: NaN,
      top_tweets: [
        {
          date: '2019-07-23 15:10:49',
          favorite_count: 1.0,
          user_followers_count: 181195.0,
          id: 1153683895562448896,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/833622521777946625/MqPTETnC_normal.jpg',
          screen_name: 'KyivPost',
          text:
            'Election results update: \n\nServant of the People won in all of #Ukraine’s districts, except for the #Donbas, the city of #Lviv and the west of #Odesa Oblast, according to party-list representation.\n\nMore updates here 👉 https://t.co/bSeXYzUyvR https://t.co/nWKntrnrrB',
          user_name: 'Kyiv Post',
          user_verified: true
        },
        {
          date: '2019-08-02 09:39:19',
          favorite_count: 1.0,
          user_followers_count: 181266.0,
          id: 1157224348614373381,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/833622521777946625/MqPTETnC_normal.jpg',
          screen_name: 'KyivPost',
          text:
            "We went back to school with #Ukraine's new lawmakers from Zelensky's Servant of the People party 🎓\n\nThe 254 first-time parliamentarians gathered in Truskavets, #Lviv, for a week-long  crash course in economics and public administration.\n\nRead more👉 https://t.co/PnoutoCQ4A https://t.co/5drTCegsAE",
          user_name: 'Kyiv Post',
          user_verified: true
        },
        {
          date: '2019-07-20 09:39:02',
          favorite_count: 0.0,
          user_followers_count: 181118.0,
          id: 1152513232864710657,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/833622521777946625/MqPTETnC_normal.jpg',
          screen_name: 'KyivPost',
          text:
            "Election Watch: #Lviv \n\n#Ukraine's parliamentary elections are happening tomorrow and a nationalistic standoff is brewing in Lviv. 3 hardcore patriotic candidates are competing against one another in a single-mandate district. https://t.co/qTwicjBepj https://t.co/WVf0cgY831",
          user_name: 'Kyiv Post',
          user_verified: true
        }
      ]
    },
    jessesingal: {
      user_followers_count: 47252.0,
      user_statuses_count: 103518.0,
      user_profile_image_url:
        'http://pbs.twimg.com/profile_images/1055673387174019074/DR9CawFY_normal.jpg',
      user_name: 'Jesse Singal',
      user_place_country: NaN,
      user_place_full_name: NaN,
      top_tweets: [
        {
          date: '2019-08-09 17:40:23',
          favorite_count: 0.0,
          user_followers_count: 47252.0,
          id: 1159882127636389891,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/1055673387174019074/DR9CawFY_normal.jpg',
          screen_name: 'jessesingal',
          text:
            "@stoicbrooks I'd like to do a Poland/Ukraine trip at some point. Only been to Warsaw (and in the middle of winter) and would like to also see at least Lviv and Kyiv",
          user_name: 'Jesse Singal',
          user_verified: true
        }
      ]
    },
    jonworth: {
      user_followers_count: 46314.0,
      user_statuses_count: 134632.0,
      user_profile_image_url:
        'http://pbs.twimg.com/profile_images/1124354534334246912/SsiZuMgZ_normal.jpg',
      user_name: 'Jon Worth',
      user_place_country: NaN,
      user_place_full_name: NaN,
      top_tweets: [
        {
          date: '2019-07-24 10:17:50',
          favorite_count: 0.0,
          user_followers_count: 46314.0,
          id: 1153972549958733824,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/1124354534334246912/SsiZuMgZ_normal.jpg',
          screen_name: 'jonworth',
          text:
            'RT @hvondelen: Some more sightseeing in Lviv, the city has become more crowded over the last two years I think. It does not feel like Ukrai…',
          user_name: 'Jon Worth',
          user_verified: true
        }
      ]
    },
    globalissuesweb: {
      user_followers_count: 44272.0,
      user_statuses_count: 815734.0,
      user_profile_image_url:
        'http://pbs.twimg.com/profile_images/2634696934/fbbd02b9e0ac76801b12e7fdecdf68be_normal.jpeg',
      user_name: 'Global Issues Web',
      user_place_country: NaN,
      user_place_full_name: NaN,
      top_tweets: [
        {
          date: '2019-07-19 20:29:39',
          favorite_count: 0.0,
          user_followers_count: 44270.0,
          id: 1152314578707070978,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/2634696934/fbbd02b9e0ac76801b12e7fdecdf68be_normal.jpeg',
          screen_name: 'globalissuesweb',
          text:
            'Election Watch: Standoff with nationalistic flavor in Lviv election district https://t.co/UXe46HnXJ7 https://t.co/Rux8LSjUSD',
          user_name: 'Global Issues Web',
          user_verified: false
        },
        {
          date: '2019-07-29 16:53:26',
          favorite_count: 0.0,
          user_followers_count: 44270.0,
          id: 1155884046888701954,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/2634696934/fbbd02b9e0ac76801b12e7fdecdf68be_normal.jpeg',
          screen_name: 'globalissuesweb',
          text:
            'Dragon Capital buys historic building on Rynok Square in Lviv https://t.co/mXr3YBETzU https://t.co/vK7N3kYk7C',
          user_name: 'Global Issues Web',
          user_verified: false
        },
        {
          date: '2019-08-02 13:01:36',
          favorite_count: 0.0,
          user_followers_count: 44272.0,
          id: 1157275253644640257,
          user_profile_image_url:
            'http://pbs.twimg.com/profile_images/2634696934/fbbd02b9e0ac76801b12e7fdecdf68be_normal.jpeg',
          screen_name: 'globalissuesweb',
          text:
            'Lviv airport increases passenger traffic by 41.2% in Jan-July https://t.co/cxF3Ejp9lr https://t.co/dyJ9eg3e3n',
          user_name: 'Global Issues Web',
          user_verified: false
        }
      ]
    }
  },
  selectedInfluencer: '@KyivPost',
  isLoaded: false
};

export default rootReducer;
