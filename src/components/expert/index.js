import { connect } from "react-redux";

import { getExpertsData, setLoadingState, onFilterChange, trainModel } from '../../actions';
import { convertToDates } from "./../subheader/Subheader";

import Expert from './Expert';

const mapStateToProps = (state) => {
   return {
     topNewsList: state.top_news,
     topReTweets: state.top_rtweets,
     topReTweetedUsersTweets: state.top_rt_users_tw,
     topUsersTweets: state.top_users_tw,
     fakeNewsUsers: state.fn_users,
     dates: state.timePeriod,
     keyword: state.keyword,
     needTrainModel: state.needTrainModel,
     isLoaded: state.isLoaded
   }
};

const mapDispatchToProps = dispatch => {
  return {
    getExpertsData: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(setLoadingState(false));
      dispatch(getExpertsData({ dates, keyword }));
    },

    onFilterChange: (period, keyword) => {
      const dates = convertToDates(period);

      dispatch(setLoadingState(false));
      dispatch(onFilterChange(period, keyword));
      dispatch(getExpertsData({ dates, keyword }));
    },
    trainModel: (period) => {
      const dates = convertToDates(period);

      dispatch(trainModel({dates}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expert);
