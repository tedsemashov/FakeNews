import *as constants from './constants';

export const getTwitterData = () => {
   return (dispatch) => {
      fetch(constants.PROXY_URL + constants.TARGET_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(constants.BODY_POST)
     })
        .then((res) => res.json())
        .then((data) => {
           dispatch(setHashtagsData(data.hashtags));
           dispatch(setKeywordData(data.keyword));
           dispatch(setTopFavoriteTweetsData(data.top_favorite_tweets));
           dispatch(setTweetsCount(data.tweets_count_ts));
        })
   };
};

export const setHashtagsData = (hashtags) => {
   return {
      type: constants.SET_HASHTAGS_DATA,
      hashtags
   };
};

export const setKeywordData = (keyword) => {
   return {
      type: constants.SET_KEYWORD_DATA,
      keyword
   };
};

export const setTopFavoriteTweetsData = (tweets) => {
   return {
      type: constants.TOP_FAVORITE_TWEETS_DATA,
      top_favorite_tweets: tweets
   };
};

export const setTweetsCount = (count) => {
   return {
      type: constants.TWEETS_COUNT_TS_DATA,
      tweets_count_ts: count
   };
};
// export const setInputValue = (value) => {
//    return {
//       type: constants.SET_INPUT_VALUE,
//       value
//    }
// };
//
// export const setSelectedName = (id) => {
//    return {
//       type: constants.SET_SELECTED_NAME,
//       id
//    }
// };
//
// export const removeSelectedName = (id) => {
//    return {
//       type: constants.REMOVE_SELECTED_NAME,
//       id
//    }
// };

