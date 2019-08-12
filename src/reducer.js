import *as constants from './constants';

const initialState = {
   hashtags: {},
   keyword: '',
   top_favorite_tweets: [],
   tweets_count_ts: {}
};

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

      // case constants.SET_INPUT_VALUE:
      //    return {
      //       ...state,
      //       inputValue: action.value
      //    };
      // case constants.SET_SELECTED_NAME:
      //    return {
      //       ...state,
      //       selectedNamesIDs: state.selectedNamesIDs.concat(action.id)
      //    };
      // case constants.REMOVE_SELECTED_NAME:
      //    return {
      //       ...state,
      //       selectedNamesIDs: state.selectedNamesIDs.filter((id) => action.id !== id)
      //    };
      default: return state;
   }
};

export default rootReducer;