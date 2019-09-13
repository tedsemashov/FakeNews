import axios from "axios";
import _ from "lodash";

import * as constants from './constants';

export const getTwitterData = (params = {}) => {
  return (dispatch) => {
    axios.post(constants.TARGET_URL, {...constants.BODY_POST, ...params}, {headers: {'Content-Type': 'application/json'}})
      .then(({ data }) => {
        dispatch(setHashtagsData(_.get(data, "hashtags", {})));
        dispatch(setKeywordData(_.get(data, "keyword", "")));
        dispatch(setTopFavoriteTweetsData(_.get(data, "top_favorite_tweets", [])));
        dispatch(setTweetsCount(_.get(data, "tweets_count_ts", {})));
        dispatch(setTopNewsData(_.get(data, "top_news_tw", [])));
        dispatch(setTopRetweetsData(_.get(data, "top_rtweets", [])));
        dispatch(setTopInfluencersData(_.get(data, "top_influencers", {})));
        dispatch(setTopMentionedUsersData(_.get(data, "top_active_users", {})));
        dispatch(setSelectedInfluencer(Object.keys(_.get(data, "top_influencers", {}))[0] || ""));
        dispatch(setSelectedMentionedUser(Object.keys(_.get(data, "top_active_users", {}))[0] || ""));
        dispatch(setLoadingState(true));
      });
  }
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

export * from "./actions/expert";
export * from "./actions/filters";
export * from "./actions/flashMessage";
