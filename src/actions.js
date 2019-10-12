import axios from "axios";
import _ from "lodash";
import { convertToDates } from "./components/subheader/Subheader";

import * as constants from './constants';

export const getTwitterData = ({ timePeriod, ...params }) => {
  return (dispatch) => {
    const dates = convertToDates(timePeriod);
    const headers = { "Content-Type": "application/json" };

    axios.post(constants.TARGET_URL, {...constants.BODY_POST, ...params, dates}, { headers })
      .then(({ data }) => {
        dispatch(setHashtagsData(_.get(data, "hashtags", {})));
        dispatch(setKeywordData(_.get(params, "keyword", "")));
        dispatch(setTopFavoriteTweetsData(_.get(data, "top_favorite_tweets", [])));
        dispatch(setTweetsCount(_.get(data, "tweets_count_ts", {})));
        dispatch(setTopNewsData(_.get(data, "top_news_tw", [])));
        dispatch(setTopRetweetsData(_.get(data, "top_rtweets", [])));
        dispatch(setTopInfluencersData(_.get(data, "top_influencers", {})));
        // dispatch(setTopFavoritedUsersData(_.get(data, "top_favorite_tw_users", {})));
        // dispatch(setTopMentionedUsersData(_.get(data, "top_active_users", {})));
        dispatch(setSelectedInfluencer(Object.keys(_.get(data, "top_influencers", {}))[0] || ""));
        dispatch(setSelectedMentionedUser(Object.keys(_.get(data, "top_active_users", {}))[0] || ""));
        dispatch(setTopRtMUsr(_.get(data, "top_rt_m_usr", {})));
        dispatch(setTopFnewsTw(_.get(data, "top_fnews_tw", [])));
        dispatch(setTopFnRtweets(_.get(data, "top_fn_rtweets", [])));
        // dispatch(setTopRtFnUsr(_.get(data, "top_rt_fn_usr", {})));
        dispatch(setTopFnUsr(_.get(data, "top_fn_usr", {})));
        dispatch(setFnTwCountTs(_.get(data, "fn_tw_count_ts", {})));
        dispatch(setFnTwProbMeanTs(_.get(data, "fn_tw_prob_mean_ts", {})));
        dispatch(setKwLinks(_.get(data, "kw_links", [])));
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

export const setTopFavoritedUsersData = favoritedUsers => {
  return {
    type: constants.TOP_FAVORITED_USERS,
    favoritedUsers
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

export const userLogOut = () => {
  return {
    type: constants.LOGIN_USER_LOG_OUT
  };
};

export const logInUser = (user) => {
  return {
    type: constants.LOGIN_USER_LOG_IN,
    user: user
  };
};

export function setTopRtMUsr(data) {
  return {
    type: constants.SET_TOP_RT_M_USR,
    top_rt_m_usr: data
  };
}

export function setTopFnewsTw(data) {
  return {
    type: constants.SET_TOP_FNEWS_TW,
    top_fnews_tw: data
  };
}

export function setTopFnRtweets(data) {
  return {
    type: constants.SET_TOP_FN_RTWEETS,
    top_fn_rtweets: data
  };
}

export function setTopRtFnUsr(data) {
  return {
    type: constants.SET_TOP_RT_FN_USR,
    top_rt_fn_usr: data
  };
}

export function setTopFnUsr(data) {
  return {
    type: constants.SET_TOP_FN_USR,
    top_fn_usr: data
  };
}

export function setFnTwCountTs(data) {
  return {
    type: constants.SET_FN_TW_COUNT_TS,
    fn_tw_count_ts: data
  };
}

export function setFnTwProbMeanTs(data) {
  return {
    type: constants.SET_FN_TW_PROB_MEAN_TS,
    fn_tw_prob_mean_ts: data
  };
}

export function setKwLinks(data) {
  return {
    type: constants.SET_KW_LINKS,
    kw_links: data
  };
}

export * from "./actions/expert";
export * from "./actions/filters";
export * from "./actions/flashMessage";
