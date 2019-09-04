import * as constants from './constants';
import expertsConstants from './constants';
export * from './actions/expert';

export const getTwitterData = (params = {}) => {
  return dispatch => {
    fetch(constants.TARGET_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...constants.BODY_POST, ...params})
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setHashtagsData(data.hashtags));
        dispatch(setKeywordData(data.keyword));
        dispatch(setTopFavoriteTweetsData(data.top_favorite_tweets));
        dispatch(setTweetsCount(data.tweets_count_ts));
        dispatch(setTopNewsData(data.top_news_tw));
        dispatch(setTopRetweetsData(data.top_rtweets));
        dispatch(setTopInfluencersData(data.top_influencers));
        dispatch(setTopMentionedUsersData(data.top_active_users));
        dispatch(setSelectedInfluencer(Object.keys(data.top_influencers)[0]));
        dispatch(setSelectedMentionedUser(Object.keys(data.top_active_users)[0]));
        dispatch(setLoadingState('true'));
      });
  };
};

export const setHashtagsData = hashtags => {
  return {
    type: constants.HASHTAGS_DATA,
    hashtags
  };
};

export const setTopNewsData = topNews => {
  return {
    type: constants.TOP_NEWS_DATA,
    topNews
  };
};

export const setTopRetweetsData = topRetweetedNews => {
  return {
    type: constants.TOP_RETWEETED_NEWS,
    topRetweetedNews
  };
};

export const setKeywordData = keyword => {
  return {
    type: constants.KEYWORD_DATA,
    keyword
  };
};

export const setTopFavoriteTweetsData = top_favorite_tweets => {
  return {
    type: constants.TOP_FAVORITE_TWEETS_DATA,
    top_favorite_tweets
  };
};

export const setTweetsCount = tweets_count_ts => {
  return {
    type: constants.TWEETS_COUNT_TS_DATA,
    tweets_count_ts
  };
};

export const setSelectedInfluencer = value => {
  return {
    type: constants.SELECTED_INFLUENCER,
    value: value.charAt(0) === '@' ? value : '@' + value
  };
};

export const setSelectedMentionedUser = value => {
  return {
    type: constants.MENTIONED_USER,
    value: value.charAt(0) === '@' ? value : '@' + value
  };
};

export const setLoadingState = loadingState => {
  return {
    type: constants.LOADING_STATE,
    isLoaded: loadingState
  };
};

export const setTimePeriod = timePeriod => {
  return {
    type: constants.TIME_PERIOD,
    timePeriod
  };
};

export const setTopInfluencersData = topInfluencers => {
  return {
    type: constants.TOP_INFLUENCERS,
    topInfluencers
  };
};

export const setTopMentionedUsersData = topMentionedUsers => {
  return {
    type: constants.TOP_MENTIONED_USERS,
    topMentionedUsers
  };
};

export const getTwittersByDate = reqBody => {
  return dispatch => {
    fetch(constants.TARGET_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setHashtagsData(data.hashtags));
        dispatch(setKeywordData(data.keyword));
        dispatch(setTopFavoriteTweetsData(data.top_favorite_tweets));
        dispatch(setTweetsCount(data.tweets_count_ts));
        dispatch(setLoadingState('false'));
      })
      .catch(err => console.log(err));
  };
};

export const setTopNewsListData = data => {
  return {
    type: constants.expertsConstants.TOP_NEWS_LIST,
    topNewsList: data
  };
};

export const setTopRtweetsData = data => {
  return {
    type: constants.expertsConstants.TOP_RTWEETS,
    topRtweets: data
  };
};

export const setTopRtUsersTwData = data => {
  return {
    type: constants.expertsConstants.TOP_RT_USERS_TW,
    topRtUsersTw: data
  };
};

export const setTopUsersTweetsData = data => {
  return {
    type: constants.expertsConstants.TOP_USERS_TWEETS,
    topUsersTweets: data
  };
};

export const setFakeNewsUsersData = data => {
  return {
    type: constants.expertsConstants.FAKE_NEWS_USERS,
    fakeNewsUsers: data
  };
};

export const setTimePeriodExpert = data => {
  return {
    type: constants.expertsConstants.TIME_PERIOD_EXPERT,
    timePeriodExpert: data
  };
};
