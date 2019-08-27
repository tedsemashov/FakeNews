import * as constants from './constants';

export const getTwitterData = () => {
  return dispatch => {
    fetch(constants.PROXY_URL + constants.TARGET_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(constants.BODY_POST)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setHashtagsData(data.hashtags));
        dispatch(setKeywordData(data.keyword));
        dispatch(setTopFavoriteTweetsData(data.top_favorite_tweets));
        dispatch(setTweetsCount(data.tweets_count_ts));
        dispatch(setTopNewsData(data.top_news_tw));
        dispatch(setTopRetweetsData(data.top_rtweets));
        dispatch(setLoadingState('true'));
      });
  };
};

export const setHashtagsData = hashtags => {
  return {
    type: constants.SET_HASHTAGS_DATA,
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
    type: constants.SET_KEYWORD_DATA,
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
    type: constants.SET_SELECTED_INFLUENCER,
    value
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

export const getTwittersByDate = reqBody => {
  return dispatch => {
    fetch(constants.PROXY_URL + constants.TARGET_URL, {
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
